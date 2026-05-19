#!/usr/bin/env node

import {spawnSync} from "node:child_process";
import {mkdtempSync, rmSync, writeFileSync} from "node:fs";
import {tmpdir} from "node:os";
import path from "node:path";
import {fileURLToPath} from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const sanityCliPath = path.join(projectRoot, "node_modules", "@sanity", "cli", "bin", "run.js");

const args = new Set(process.argv.slice(2));
const shouldExecute = args.has("--execute");
const shouldDryRun = args.has("--dry-run") || !shouldExecute;

const projectId = "x2owjpj6";
const dataset = "production";
const apiVersion = "2026-05-17";
const expectedUpdateEntryCount = 10;

function runCommand(commandArgs, options = {}) {
  const result = spawnSync(process.execPath, [sanityCliPath, ...commandArgs], {
    cwd: projectRoot,
    encoding: "utf8",
    shell: false,
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      [
        `Command failed: sanity ${commandArgs.join(" ")}`,
        result.stdout,
        result.stderr,
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }

  return typeof result.stdout === "string" ? result.stdout.trim() : "";
}

function querySanity(query) {
  const output = runCommand([
    "documents",
    "query",
    query,
    "--project-id",
    projectId,
    "--dataset",
    dataset,
    "--api-version",
    apiVersion,
  ]);

  return JSON.parse(output);
}

async function publicQuerySanity(query) {
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const payload = await response.json();

  if (!response.ok || payload.error) {
    throw new Error(
      `Public Sanity query failed: ${payload.error ?? response.statusText}`,
    );
  }

  return payload.result;
}

function targetIdForSlug(slug) {
  return `update-entry-${slug}`;
}

function assertPublicId(id) {
  if (!id || id.includes(".") || id.includes("/") || id.startsWith("drafts.")) {
    throw new Error(`Invalid public target ID: ${id}`);
  }
}

function stripSystemFields(document) {
  const content = {...document};

  delete content._createdAt;
  delete content._updatedAt;
  delete content._rev;

  return content;
}

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (value && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function buildClone(sourceDocument) {
  const slug = sourceDocument.slug?.current;

  if (!slug) {
    throw new Error(`Source document has no slug.current: ${sourceDocument._id}`);
  }

  const clone = {
    ...stripSystemFields(sourceDocument),
    _id: targetIdForSlug(slug),
  };

  assertPublicId(clone._id);
  return clone;
}

function getDotIdUpdateEntries() {
  return querySanity(
    "*[_type == 'updateEntry' && _id match '*.*'] | order(contentDate asc)",
  );
}

function getDocumentsByIds(ids) {
  if (ids.length === 0) {
    return [];
  }

  return querySanity(
    `*[_id in ${JSON.stringify(ids)}] | order(_id asc)`,
  );
}

function checkTargetConflicts(targetIds) {
  return getDocumentsByIds(targetIds);
}

function assertConflictsAreExistingClones(conflicts, clones) {
  const expectedById = new Map(clones.map((clone) => [clone._id, clone]));

  if (conflicts.length !== clones.length) {
    throw new Error(
      `Target ID conflicts found: ${conflicts.map((document) => document._id).join(", ")}`,
    );
  }

  for (const conflict of conflicts) {
    const expectedClone = expectedById.get(conflict._id);

    if (
      !expectedClone ||
      stableStringify(stripSystemFields(conflict)) !== stableStringify(expectedClone)
    ) {
      throw new Error(`Target ID conflict is not an identical clone: ${conflict._id}`);
    }
  }
}

function printMapping(sources, clones, conflicts) {
  console.log("UpdateEntry public ID correction");
  console.log(`Mode: ${shouldExecute ? "execute" : "dry-run"}`);
  console.log(`Source dot-ID documents: ${sources.length}`);
  console.log(`Target conflicts: ${conflicts.length}`);
  console.log("");
  console.log("Old ID -> New ID | Slug | Title");
  console.log("--- | --- | ---");

  sources.forEach((source, index) => {
    console.log(
      `${source._id} -> ${clones[index]._id} | ${source.slug.current} | ${source.title}`,
    );
  });
}

function writeCloneImportFile(clones) {
  const temporaryDirectory = mkdtempSync(
    path.join(tmpdir(), "roger-update-entry-id-correction-"),
  );
  const filePath = path.join(temporaryDirectory, "update-entry-clones.ndjson");

  writeFileSync(
    filePath,
    `${clones.map((clone) => JSON.stringify(clone)).join("\n")}\n`,
    "utf8",
  );

  return {filePath, temporaryDirectory};
}

function importClones(clones) {
  const {filePath, temporaryDirectory} = writeCloneImportFile(clones);

  try {
    runCommand([
      "datasets",
      "import",
      filePath,
      "--replace",
      "--project-id",
      projectId,
      "--dataset",
      dataset,
    ], {
      stdio: "inherit",
    });
  } finally {
    rmSync(temporaryDirectory, {force: true, recursive: true});
  }
}

function validateClones(sources, clones) {
  const cloneIds = clones.map((clone) => clone._id);
  const remoteClones = getDocumentsByIds(cloneIds);
  const remoteById = new Map(remoteClones.map((document) => [document._id, document]));

  for (const [index, source] of sources.entries()) {
    const expectedClone = clones[index];
    const remoteClone = remoteById.get(expectedClone._id);

    if (!remoteClone) {
      throw new Error(`Clone missing after import: ${expectedClone._id}`);
    }

    if (remoteClone.slug?.current !== source.slug?.current) {
      throw new Error(`Slug mismatch for ${expectedClone._id}`);
    }

    if (remoteClone.title !== source.title) {
      throw new Error(`Title mismatch for ${expectedClone._id}`);
    }

    if (remoteClone.category !== source.category) {
      throw new Error(`Category mismatch for ${expectedClone._id}`);
    }

    if (remoteClone.contentDate !== source.contentDate) {
      throw new Error(`contentDate mismatch for ${expectedClone._id}`);
    }

    if (remoteClone.publishedAt !== source.publishedAt) {
      throw new Error(`publishedAt mismatch for ${expectedClone._id}`);
    }

    if (
      stableStringify(stripSystemFields(remoteClone)) !==
      stableStringify(expectedClone)
    ) {
      throw new Error(`Full content comparison failed for ${expectedClone._id}`);
    }
  }
}

async function validatePublicRead(clones) {
  const publicCount = await publicQuerySanity('count(*[_type == "updateEntry"])');
  const cloneIds = clones.map((clone) => clone._id);
  const publicClones = await publicQuerySanity(
    `*[_id in ${JSON.stringify(cloneIds)}]{_id,_type,title,"slug":slug.current,category,contentDate,publishedAt}`,
  );

  if (publicCount !== expectedUpdateEntryCount) {
    throw new Error(
      `Expected public updateEntry count ${expectedUpdateEntryCount}, got ${publicCount}`,
    );
  }

  if (!Array.isArray(publicClones) || publicClones.length !== clones.length) {
    throw new Error(
      `Expected ${clones.length} public clones, got ${publicClones?.length ?? 0}`,
    );
  }

  for (const clone of publicClones) {
    assertPublicId(clone._id);
  }

  console.log("");
  console.log(`Public read count: ${publicCount}`);
  console.log(`Public clone read count: ${publicClones.length}`);
}

function deleteDotIdSources(sources) {
  runCommand([
    "documents",
    "delete",
    ...sources.map((source) => source._id),
    "--project-id",
    projectId,
    "--dataset",
    dataset,
  ], {
    stdio: "inherit",
  });
}

async function main() {
  const sources = getDotIdUpdateEntries();
  const clones = sources.map(buildClone);
  const conflicts = checkTargetConflicts(clones.map((clone) => clone._id));

  printMapping(sources, clones, conflicts);

  if (sources.length !== expectedUpdateEntryCount) {
    throw new Error(
      `Expected ${expectedUpdateEntryCount} dot-ID updateEntry documents, got ${sources.length}`,
    );
  }

  if (conflicts.length > 0 && shouldDryRun) {
    throw new Error(
      `Target ID conflicts found: ${conflicts.map((document) => document._id).join(", ")}`,
    );
  }

  if (shouldDryRun) {
    console.log("");
    console.log("Dry-run only. No documents were created or deleted.");
    return;
  }

  console.log("");
  if (conflicts.length > 0) {
    console.log("Root-level clone documents already exist. Validating before resume...");
    assertConflictsAreExistingClones(conflicts, clones);
  } else {
    console.log("Creating root-level clone documents...");
    importClones(clones);
  }

  console.log("");
  console.log("Validating cloned document content...");
  validateClones(sources, clones);

  console.log("");
  console.log("Validating public unauthenticated read before deleting old docs...");
  await validatePublicRead(clones);

  console.log("");
  console.log("Deleting old private dot-ID documents...");
  deleteDotIdSources(sources);

  const remainingDotIds = getDotIdUpdateEntries();

  if (remainingDotIds.length !== 0) {
    throw new Error(
      `Expected zero remaining dot-ID updateEntry documents, got ${remainingDotIds.length}`,
    );
  }

  await validatePublicRead(clones);

  console.log("");
  console.log("Done. All updateEntry documents now use public root-level IDs.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
