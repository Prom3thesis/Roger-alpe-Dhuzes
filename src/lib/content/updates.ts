import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export const updateCategories = [
  "campagne",
  "training",
  "media",
  "herinnering",
  "community",
] as const;

export type UpdateCategory = (typeof updateCategories)[number];

export type UpdateFrontmatter = {
  title: string;
  slug: string;
  date: string;
  category: UpdateCategory;
  excerpt: string;
  featured: boolean;
  featuredImage?: string;
  featuredImageAlt?: string;
  sourceLabel?: string;
  sourceContext?: string;
  embedUrl?: string;
  externalUrl?: string;
};

export type UpdateEntry = {
  metadata: UpdateFrontmatter;
  content: string;
};

export const updateCategoryLabels: Record<UpdateCategory, string> = {
  campagne: "Campagne",
  training: "Training",
  media: "Media",
  herinnering: "Herinnering",
  community: "Community",
};

const updatesDirectory = path.join(process.cwd(), "content", "updates");
const markdownExtension = ".md";

function isUpdateCategory(value: string): value is UpdateCategory {
  return updateCategories.includes(value as UpdateCategory);
}

function parseFrontmatterValue(value: string) {
  const trimmedValue = value.trim();

  if (
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
  ) {
    return trimmedValue.slice(1, -1);
  }

  return trimmedValue;
}

function splitFrontmatter(rawContent: string, filePath: string) {
  const normalizedContent = rawContent.replace(/\r\n/g, "\n");

  if (!normalizedContent.startsWith("---\n")) {
    throw new Error(`Missing frontmatter block in ${filePath}`);
  }

  const closingIndex = normalizedContent.indexOf("\n---\n", 4);

  if (closingIndex === -1) {
    throw new Error(`Unclosed frontmatter block in ${filePath}`);
  }

  return {
    content: normalizedContent.slice(closingIndex + 5).trim(),
    frontmatter: normalizedContent.slice(4, closingIndex).trim(),
  };
}

function parseRawFrontmatter(frontmatter: string, filePath: string) {
  const values: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    if (!line.trim()) {
      continue;
    }

    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      throw new Error(`Invalid frontmatter line in ${filePath}: ${line}`);
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    values[key] = parseFrontmatterValue(value);
  }

  return values;
}

function requiredString(
  values: Record<string, string>,
  key: keyof UpdateFrontmatter,
  filePath: string,
) {
  const value = values[key];

  if (!value) {
    throw new Error(`Missing required frontmatter field "${key}" in ${filePath}`);
  }

  return value;
}

function optionalString(values: Record<string, string>, key: string) {
  const value = values[key];
  return value ? value : undefined;
}

function parseBoolean(
  values: Record<string, string>,
  key: keyof UpdateFrontmatter,
  filePath: string,
) {
  const value = values[key];

  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  throw new Error(`Frontmatter field "${key}" must be true or false in ${filePath}`);
}

function parseUpdateFile(fileName: string): UpdateEntry {
  const filePath = path.join(updatesDirectory, fileName);
  const rawContent = readFileSync(filePath, "utf8");
  const { content, frontmatter } = splitFrontmatter(rawContent, filePath);
  const rawFrontmatter = parseRawFrontmatter(frontmatter, filePath);
  const category = requiredString(rawFrontmatter, "category", filePath);
  const slug = requiredString(rawFrontmatter, "slug", filePath);

  if (!isUpdateCategory(category)) {
    throw new Error(`Unknown update category "${category}" in ${filePath}`);
  }

  if (!content) {
    throw new Error(`Missing update content in ${filePath}`);
  }

  return {
    content,
    metadata: {
      title: requiredString(rawFrontmatter, "title", filePath),
      slug,
      date: requiredString(rawFrontmatter, "date", filePath),
      category,
      excerpt: requiredString(rawFrontmatter, "excerpt", filePath),
      featured: parseBoolean(rawFrontmatter, "featured", filePath),
      featuredImage: optionalString(rawFrontmatter, "featuredImage"),
      featuredImageAlt: optionalString(rawFrontmatter, "featuredImageAlt"),
      sourceLabel: optionalString(rawFrontmatter, "sourceLabel"),
      sourceContext: optionalString(rawFrontmatter, "sourceContext"),
      embedUrl: optionalString(rawFrontmatter, "embedUrl"),
      externalUrl: optionalString(rawFrontmatter, "externalUrl"),
    },
  };
}

function sortByNewestFirst(first: UpdateEntry, second: UpdateEntry) {
  return second.metadata.date.localeCompare(first.metadata.date);
}

function assertUniqueSlugs(updates: UpdateEntry[]) {
  const slugs = new Set<string>();

  for (const update of updates) {
    if (slugs.has(update.metadata.slug)) {
      throw new Error(`Duplicate update slug "${update.metadata.slug}"`);
    }

    slugs.add(update.metadata.slug);
  }
}

export function getAllUpdates() {
  if (!existsSync(updatesDirectory)) {
    return [];
  }

  const updates = readdirSync(updatesDirectory)
    .filter((fileName) => fileName.endsWith(markdownExtension))
    .map(parseUpdateFile)
    .sort(sortByNewestFirst);

  assertUniqueSlugs(updates);

  return updates;
}

export function getAllUpdateMetadata() {
  return getAllUpdates().map((update) => update.metadata);
}

export function getFeaturedUpdates() {
  return getAllUpdates().filter((update) => update.metadata.featured);
}

export function getUpdateBySlug(slug: string) {
  return getAllUpdates().find((update) => update.metadata.slug === slug);
}

export function getUpdateSlugs() {
  return getAllUpdates().map((update) => update.metadata.slug);
}

export function formatUpdateDate(date: string) {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
