#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const updatesDirectory = path.join(projectRoot, "content", "updates");
const outputFile = path.join(
  projectRoot,
  "sanity",
  "imports",
  "existing-markdown-updateEntries.ndjson",
);

const args = new Set(process.argv.slice(2));
const shouldImport = args.has("--import");
const shouldWriteFile = args.has("--write-file") || shouldImport;
const shouldDryRun = args.has("--dry-run") || (!shouldWriteFile && !shouldImport);

const categoryMap = {
  campagne: "campaign",
  community: "campaign",
  herinnering: "campaign",
  media: "media",
  training: "diary",
};

const defaultProjectId = "x2owjpj6";
const defaultDataset = "production";
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

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

function parseFrontmatterValue(value) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  return trimmed;
}

function splitFrontmatter(rawContent, fileName) {
  const normalizedContent = rawContent.replace(/\r\n/g, "\n");

  if (!normalizedContent.startsWith("---\n")) {
    throw new Error(`Missing frontmatter block in ${fileName}`);
  }

  const closingIndex = normalizedContent.indexOf("\n---\n", 4);

  if (closingIndex === -1) {
    throw new Error(`Unclosed frontmatter block in ${fileName}`);
  }

  return {
    body: normalizedContent.slice(closingIndex + 5).trim(),
    frontmatter: normalizedContent.slice(4, closingIndex).trim(),
  };
}

function parseFrontmatter(frontmatter, fileName) {
  const parsed = {};

  for (const line of frontmatter.split("\n")) {
    if (!line.trim()) {
      continue;
    }

    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      throw new Error(`Invalid frontmatter line in ${fileName}: ${line}`);
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    parsed[key] = parseFrontmatterValue(value);
  }

  return parsed;
}

function requiredString(metadata, key, fileName) {
  const value = metadata[key];

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required frontmatter field "${key}" in ${fileName}`);
  }

  return value.trim();
}

function optionalString(metadata, key) {
  const value = metadata[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function parseMarkdownFile(fileName) {
  const filePath = path.join(updatesDirectory, fileName);
  const rawContent = readFileSync(filePath, "utf8");
  const { body, frontmatter } = splitFrontmatter(rawContent, fileName);
  const metadata = parseFrontmatter(frontmatter, fileName);
  const category = requiredString(metadata, "category", fileName);
  const date = requiredString(metadata, "date", fileName);

  if (!categoryMap[category]) {
    throw new Error(`No CMS category mapping for "${category}" in ${fileName}`);
  }

  if (!datePattern.test(date)) {
    throw new Error(`Invalid date "${date}" in ${fileName}`);
  }

  if (!body) {
    throw new Error(`Missing Markdown body in ${fileName}`);
  }

  return {
    body,
    fileName,
    metadata: {
      title: requiredString(metadata, "title", fileName),
      slug: requiredString(metadata, "slug", fileName),
      date,
      category,
      excerpt: requiredString(metadata, "excerpt", fileName),
      featured: metadata.featured === true,
      featuredImage: optionalString(metadata, "featuredImage"),
      featuredImageAlt: optionalString(metadata, "featuredImageAlt"),
      sourceLabel: optionalString(metadata, "sourceLabel"),
      sourceContext: optionalString(metadata, "sourceContext"),
      embedUrl: optionalString(metadata, "embedUrl"),
      externalUrl: optionalString(metadata, "externalUrl"),
    },
  };
}

function pushSpan(children, text, marks, keySeed) {
  if (!text) {
    return;
  }

  children.push({
    _key: stableKey(`${keySeed}:${children.length}:${text}:${marks.join(",")}`),
    _type: "span",
    marks,
    text,
  });
}

function parseInlineText(text, keySeed) {
  const children = [];
  const markDefs = [];
  const tokenPattern = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\))/g;
  let cursor = 0;
  let match;

  while ((match = tokenPattern.exec(text)) !== null) {
    pushSpan(children, text.slice(cursor, match.index), [], keySeed);

    if (match[2]) {
      pushSpan(children, match[2], ["strong"], `${keySeed}:strong:${match.index}`);
    } else if (match[3] && match[4]) {
      const markKey = stableKey(`${keySeed}:link:${match.index}:${match[4]}`);
      markDefs.push({
        _key: markKey,
        _type: "link",
        href: match[4],
      });
      pushSpan(children, match[3], [markKey], `${keySeed}:link:${match.index}`);
    }

    cursor = match.index + match[0].length;
  }

  pushSpan(children, text.slice(cursor), [], keySeed);

  if (children.length === 0) {
    pushSpan(children, text, [], keySeed);
  }

  return { children, markDefs };
}

function createTextBlock({ text, style = "normal", listItem, level }, keySeed) {
  const { children, markDefs } = parseInlineText(text, keySeed);
  const block = {
    _key: stableKey(`block:${keySeed}`),
    _type: "block",
    children,
    markDefs,
    style,
  };

  if (listItem) {
    block.listItem = listItem;
    block.level = level ?? 1;
  }

  return block;
}

function markdownToPortableText(markdown, slug) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let paragraphLines = [];
  let quoteLines = [];

  function flushParagraph() {
    if (paragraphLines.length === 0) {
      return;
    }

    const text = paragraphLines.join(" ");
    blocks.push(createTextBlock({ text }, `${slug}:p:${blocks.length}`));
    paragraphLines = [];
  }

  function flushQuote() {
    if (quoteLines.length === 0) {
      return;
    }

    const text = quoteLines.join(" ");
    blocks.push(
      createTextBlock(
        { text, style: "blockquote" },
        `${slug}:quote:${blocks.length}`,
      ),
    );
    quoteLines = [];
  }

  function flushTextBlocks() {
    flushParagraph();
    flushQuote();
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushTextBlocks();
      continue;
    }

    if (line.startsWith("### ")) {
      flushTextBlocks();
      blocks.push(
        createTextBlock(
          { text: line.slice(4), style: "h3" },
          `${slug}:h3:${blocks.length}`,
        ),
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushTextBlocks();
      blocks.push(
        createTextBlock(
          { text: line.slice(3), style: "h2" },
          `${slug}:h2:${blocks.length}`,
        ),
      );
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      quoteLines.push(line.slice(2));
      continue;
    }

    if (line.startsWith("- ")) {
      flushTextBlocks();
      blocks.push(
        createTextBlock(
          { text: line.slice(2), listItem: "bullet", level: 1 },
          `${slug}:bullet:${blocks.length}`,
        ),
      );
      continue;
    }

    const numberedMatch = line.match(/^\d+\.\s+(.+)$/);

    if (numberedMatch) {
      flushTextBlocks();
      blocks.push(
        createTextBlock(
          { text: numberedMatch[1], listItem: "number", level: 1 },
          `${slug}:number:${blocks.length}`,
        ),
      );
      continue;
    }

    flushQuote();
    paragraphLines.push(line);
  }

  flushTextBlocks();
  return blocks;
}

function buildSourceContext(update) {
  const parts = [
    `Migrated from existing Markdown update: content/updates/${update.fileName}`,
  ];
  const { metadata } = update;

  if (metadata.sourceLabel || metadata.sourceContext) {
    parts.push(
      `Original source context: ${[metadata.sourceLabel, metadata.sourceContext]
        .filter(Boolean)
        .join(" - ")}`,
    );
  }

  if (metadata.featuredImage) {
    parts.push(
      `Legacy featuredImage not imported as Sanity asset in this migration: ${metadata.featuredImage}`,
    );

    if (metadata.featuredImageAlt) {
      parts.push(`Legacy featuredImageAlt: ${metadata.featuredImageAlt}`);
    }
  }

  return parts.join("\n");
}

function externalLabelFor(update) {
  if (!update.metadata.externalUrl) {
    return undefined;
  }

  if (update.metadata.slug === "roger-bij-rtv-parkstad") {
    return "Bekijk het RTV Parkstad-interview";
  }

  return "Bekijk externe bron";
}

function updateEntryIdForSlug(slug) {
  return `update-entry-${slug}`;
}

function mapToSanityDocument(update) {
  const { metadata } = update;
  const document = {
    _id: updateEntryIdForSlug(metadata.slug),
    _type: "updateEntry",
    title: metadata.title,
    slug: {
      _type: "slug",
      current: metadata.slug,
    },
    category: categoryMap[metadata.category],
    excerpt: metadata.excerpt,
    body: markdownToPortableText(update.body, metadata.slug),
    contentDate: metadata.date,
    publishedAt: `${metadata.date}T00:00:00.000Z`,
    featured: metadata.featured,
    showOnHome: false,
    sourceContext: buildSourceContext(update),
  };

  if (metadata.externalUrl) {
    document.externalUrl = metadata.externalUrl;
    document.externalLabel = externalLabelFor(update);
  }

  if (metadata.embedUrl) {
    document.videoUrl = metadata.embedUrl;
  }

  return document;
}

function validateDocuments(documents) {
  const warnings = [];
  const slugs = new Set();

  for (const { document, update } of documents) {
    if (slugs.has(document.slug.current)) {
      throw new Error(`Duplicate slug after conversion: ${document.slug.current}`);
    }

    slugs.add(document.slug.current);

    if (!document.body.length) {
      throw new Error(`No Portable Text body generated for ${document.slug.current}`);
    }

    if (update.metadata.featuredImage) {
      warnings.push(
        `${document.slug.current}: featured image is deferred because no Sanity asset upload is performed.`,
      );
    }
  }

  return warnings;
}

function printPreview(documents, warnings) {
  console.log("Existing update migration preview");
  console.log(`Documents: ${documents.length}`);
  console.log("");
  console.log(
    [
      "#",
      "Slug",
      "Markdown category",
      "CMS category",
      "Content date",
      "Published at",
      "Featured",
      "Image",
    ].join(" | "),
  );
  console.log(["-", "-", "-", "-", "-", "-", "-", "-"].join(" | "));

  documents.forEach(({ document, update }, index) => {
    console.log(
      [
        String(index + 1),
        document.slug.current,
        update.metadata.category,
        document.category,
        document.contentDate,
        document.publishedAt,
        document.featured ? "yes" : "no",
        update.metadata.featuredImage ? "deferred" : "none",
      ].join(" | "),
    );
  });

  if (warnings.length) {
    console.log("");
    console.log("Warnings:");
    warnings.forEach((warning) => console.log(`- ${warning}`));
  }
}

function writeNdjson(documents) {
  mkdirSync(path.dirname(outputFile), { recursive: true });
  writeFileSync(
    outputFile,
    `${documents.map(({ document }) => JSON.stringify(document)).join("\n")}\n`,
    "utf8",
  );
  console.log("");
  console.log(`Wrote ${documents.length} documents to ${path.relative(projectRoot, outputFile)}`);
}

function runImport(projectId, dataset) {
  const command = process.platform === "win32" ? "npx.cmd" : "npx";
  const result = spawnSync(
    command,
    [
      "sanity",
      "datasets",
      "import",
      outputFile,
      "--replace",
      "--project-id",
      projectId,
      "--dataset",
      dataset,
    ],
    {
      cwd: projectRoot,
      shell: false,
      stdio: "inherit",
    },
  );

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

  if (!existsSync(updatesDirectory)) {
    throw new Error(`Updates directory does not exist: ${updatesDirectory}`);
  }

  const updates = readdirSync(updatesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort()
    .map(parseMarkdownFile);
  const documents = updates.map((update) => ({
    document: mapToSanityDocument(update),
    update,
  }));
  const warnings = validateDocuments(documents);

  if (shouldDryRun || shouldWriteFile || shouldImport) {
    printPreview(documents, warnings);
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
