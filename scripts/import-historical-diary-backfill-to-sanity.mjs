#!/usr/bin/env node

import {spawnSync} from "node:child_process";
import {createHash} from "node:crypto";
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const outputFile = path.join(
  projectRoot,
  "sanity",
  "imports",
  "historical-diary-backfill-updateEntries.ndjson",
);
const existingMigrationFile = path.join(
  projectRoot,
  "sanity",
  "imports",
  "existing-markdown-updateEntries.ndjson",
);

const args = new Set(process.argv.slice(2));
const shouldImport = args.has("--import");
const shouldWriteFile = args.has("--write-file") || shouldImport;
const shouldDryRun = args.has("--dry-run") || (!shouldWriteFile && !shouldImport);

const defaultProjectId = "x2owjpj6";
const defaultDataset = "production";
const publishedAt = "2026-05-19T00:00:00.000Z";

const backfillPosts = [
  {
    _id: "update-entry-gesprek-met-trainer-coach-tom",
    title: "Met trainer en coach Tom naar een realistisch plan",
    slug: "gesprek-met-trainer-coach-tom",
    category: "diary",
    contentDate: "2026-01-09",
    excerpt:
      "Roger bespreekt met Tom de route naar Alpe d'HuZes: training, kleding, eten, drinken, een Garmin-horloge en eerst een medische check-up.",
    paragraphs: [
      "Op 9 januari keek Roger samen met zijn neef Tom vooruit naar de weg richting Alpe d'HuZes. Vanaf dat moment noemt hij Tom ook zijn coach en trainer.",
      "Ze namen de voorbereiding breed door: de trainingen tot aan de tocht, kleding, eten, drinken en wat nodig is om de opbouw realistisch te maken. Roger kreeg ook een Garmin-horloge om zijn trainingen beter te kunnen volgen.",
      "Tom adviseerde om eerst een medische check-up te laten doen. Niet om de voorbereiding af te remmen, maar juist om verantwoord te starten en te zien hoe Rogers lichaam op belasting reageert.",
      "Voor Roger gaf dit gesprek richting. Hij wist beter hoe hij moest beginnen, welke stappen hij richting 4 juni moest zetten en waarom hulp van mensen om hem heen onderdeel is van deze tocht.",
    ],
    sourceContext:
      "Historical backfill from source-assets/doc-mijnverhaal-roger-alpe-dhuzes/Content-Manager-Roger Chappin.pdf.\nPDF section: \"Gesprek met me trainer/coach\" (Friday 9th Jan).\nSelected by Content Integration Review v1.0 as suitable diary backfill. Historical donation amounts from the source were deliberately not reused because live donation totals require separate handling.",
  },
  {
    _id: "update-entry-een-persoonlijke-tocht-voor-meer-mensen",
    title: "Een persoonlijke tocht voor meer mensen",
    slug: "een-persoonlijke-tocht-voor-meer-mensen",
    category: "campaign",
    contentDate: "2026-03-28",
    excerpt:
      "Tijdens zijn voorbereiding wordt Rogers tocht breder: de belofte aan Riny blijft centraal, maar ook andere verhalen van verlies en kracht krijgen een plek.",
    paragraphs: [
      "Op 28 maart beschreef Roger hoe zijn deelname aan Alpe d'HuZes steeds duidelijker een persoonlijke tocht werd met een bredere betekenis.",
      "De belofte aan zijn moeder Riny Chappin-Plieger blijft het hart van zijn deelname. Tegelijk hoorde Roger tijdens zijn voorbereiding verhalen van verlies, kracht en verbondenheid die hij niet los van zijn tocht wil zien.",
      "Daarom wil hij ook stilstaan bij Arianne Heuts-Veenhof, bij de mensen rond G.O.C. Parkstad en bij veteranen en geüniformeerden die met kanker of chroom-6-gerelateerde problematiek te maken kregen.",
      "Deze backfill laat het moment zien waarop de herinneringslijn in Rogers campagne breder werd dan alleen zijn eigen belofte. De latere herinneringsactie geeft daar vervolgens een tastbare vorm aan.",
    ],
    sourceContext:
      "Historical backfill from source-assets/doc-mijnverhaal-roger-alpe-dhuzes/Content-Manager-Roger Chappin.pdf.\nPDF section: \"Aangepaste aanpak / Een persoonlijke tocht\" (Saturday 28th Mar).\nPublic copy intentionally omits older practical price/material wording; the later confirmed remembrance-action information remains leading.",
  },
];

function loadDotenv(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  for (const line of readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;

    if (process.env[key]) {
      continue;
    }

    process.env[key] = rawValue.trim().replace(/^["']|["']$/g, "");
  }
}

function stableKey(seed) {
  return createHash("sha1").update(seed).digest("hex").slice(0, 12);
}

function createTextBlock(text, keySeed) {
  return {
    _key: stableKey(`block:${keySeed}`),
    _type: "block",
    children: [
      {
        _key: stableKey(`span:${keySeed}:${text}`),
        _type: "span",
        marks: [],
        text,
      },
    ],
    markDefs: [],
    style: "normal",
  };
}

function toSanityDocument(post) {
  return {
    _id: post._id,
    _type: "updateEntry",
    title: post.title,
    slug: {
      _type: "slug",
      current: post.slug,
    },
    category: post.category,
    excerpt: post.excerpt,
    body: post.paragraphs.map((paragraph, index) =>
      createTextBlock(paragraph, `${post.slug}:p:${index}`),
    ),
    contentDate: post.contentDate,
    publishedAt,
    featured: false,
    showOnHome: false,
    sourceContext: post.sourceContext,
  };
}

function readExistingMigrationSlugs() {
  if (!existsSync(existingMigrationFile)) {
    return new Set();
  }

  const slugs = readFileSync(existingMigrationFile, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .map((document) => document?.slug?.current)
    .filter(Boolean);

  return new Set(slugs);
}

function validateDocuments(documents) {
  const slugs = new Set();
  const existingMigrationSlugs = readExistingMigrationSlugs();

  for (const document of documents) {
    if (slugs.has(document.slug.current)) {
      throw new Error(`Duplicate backfill slug: ${document.slug.current}`);
    }

    if (existingMigrationSlugs.has(document.slug.current)) {
      throw new Error(
        `Backfill slug conflicts with existing Prompt 22 migration: ${document.slug.current}`,
      );
    }

    if (!["diary", "campaign", "media"].includes(document.category)) {
      throw new Error(`Invalid category for ${document.slug.current}`);
    }

    if (!document.body.length) {
      throw new Error(`No Portable Text body generated for ${document.slug.current}`);
    }

    slugs.add(document.slug.current);
  }
}

function printPreview(documents) {
  console.log("Historical diary backfill preview");
  console.log(`Documents: ${documents.length}`);
  console.log("");
  console.log(
    [
      "#",
      "Slug",
      "Category",
      "Content date",
      "Published at",
      "Paragraphs",
    ].join(" | "),
  );
  console.log(["-", "-", "-", "-", "-", "-"].join(" | "));

  documents.forEach((document, index) => {
    console.log(
      [
        String(index + 1),
        document.slug.current,
        document.category,
        document.contentDate,
        document.publishedAt,
        String(document.body.length),
      ].join(" | "),
    );
  });
}

function writeNdjson(documents) {
  mkdirSync(path.dirname(outputFile), {recursive: true});
  writeFileSync(
    outputFile,
    `${documents.map((document) => JSON.stringify(document)).join("\n")}\n`,
    "utf8",
  );
  console.log("");
  console.log(`Wrote ${documents.length} documents to ${path.relative(projectRoot, outputFile)}`);
}

function runImport(projectId, dataset) {
  const args = [
    "sanity",
    "datasets",
    "import",
    outputFile,
    "--replace",
    "--project-id",
    projectId,
    "--dataset",
    dataset,
  ];
  const result =
    process.platform === "win32"
      ? spawnSync(process.env.ComSpec || "cmd.exe", ["/d", "/s", "/c", "npx", ...args], {
          cwd: projectRoot,
          shell: false,
          stdio: "inherit",
        })
      : spawnSync("npx", args, {
          cwd: projectRoot,
          shell: false,
          stdio: "inherit",
        });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function main() {
  loadDotenv(path.join(projectRoot, ".env.local"));
  loadDotenv(path.join(projectRoot, ".env"));

  const documents = backfillPosts.map(toSanityDocument);
  validateDocuments(documents);

  if (shouldDryRun || shouldWriteFile || shouldImport) {
    printPreview(documents);
  }

  if (shouldWriteFile) {
    writeNdjson(documents);
  }

  if (shouldImport) {
    const projectId =
      process.env.SANITY_STUDIO_PROJECT_ID ||
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
      defaultProjectId;
    const dataset =
      process.env.SANITY_STUDIO_DATASET ||
      process.env.NEXT_PUBLIC_SANITY_DATASET ||
      defaultDataset;

    console.log("");
    console.log(`Importing into Sanity project ${projectId}, dataset ${dataset}.`);
    runImport(projectId, dataset);
  }
}

main();
