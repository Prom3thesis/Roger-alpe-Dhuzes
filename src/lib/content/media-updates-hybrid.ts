import { formatUpdateDate, getAllUpdates, getUpdateSlugs, updateCategoryLabels, type UpdateEntry } from "@/lib/content/updates";
import type {
  SanityImageObject,
  UpdateEntryCategory,
  UpdateEntryDetail,
  UpdateEntryListItem,
} from "@/sanity/types";
import type { ImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

export type MediaUpdateSource = "markdown" | "sanity";

export type MediaUpdateImage = {
  src: string;
  alt: string;
};

export type MediaUpdateListItem = {
  source: MediaUpdateSource;
  title: string;
  slug: string;
  category: string;
  categoryLabel: string;
  excerpt: string;
  contentDate: string;
  publishedAt: string;
  featured: boolean;
  showOnHome: boolean;
  image?: MediaUpdateImage;
  externalUrl?: string | null;
  externalLabel?: string | null;
  videoUrl?: string | null;
};

type ImageUrlFor = (source: SanityImageSource) => ImageUrlBuilder;

const sanityCategoryLabels: Record<UpdateEntryCategory, string> = {
  diary: "Dagboek",
  campaign: "Campagne",
  media: "Media",
};

function sortByContentDateNewestFirst(
  first: MediaUpdateListItem,
  second: MediaUpdateListItem,
) {
  const contentDateComparison = second.contentDate.localeCompare(first.contentDate);

  if (contentDateComparison !== 0) {
    return contentDateComparison;
  }

  return second.publishedAt.localeCompare(first.publishedAt);
}

function mapMarkdownUpdateToListItem(update: UpdateEntry): MediaUpdateListItem {
  const { metadata } = update;

  return {
    source: "markdown",
    title: metadata.title,
    slug: metadata.slug,
    category: metadata.category,
    categoryLabel: updateCategoryLabels[metadata.category],
    excerpt: metadata.excerpt,
    contentDate: metadata.date,
    publishedAt: metadata.date,
    featured: metadata.featured,
    showOnHome: false,
    image: metadata.featuredImage
      ? {
          src: metadata.featuredImage,
          alt: metadata.featuredImageAlt ?? "",
        }
      : undefined,
    externalUrl: metadata.externalUrl,
    externalLabel: metadata.embedUrl ? "Bekijk video" : undefined,
    videoUrl: metadata.embedUrl,
  };
}

function buildSanityImage(
  image: SanityImageObject | null | undefined,
  alt: string | null | undefined,
  urlForSanityImage: ImageUrlFor,
): MediaUpdateImage | undefined {
  if (!image?.asset?._ref) {
    return undefined;
  }

  return {
    src: urlForSanityImage(image)
      .width(1200)
      .height(750)
      .fit("crop")
      .auto("format")
      .url(),
    alt: alt ?? "",
  };
}

function mapSanityUpdateToListItem(
  update: UpdateEntryListItem,
  urlForSanityImage: ImageUrlFor,
): MediaUpdateListItem {
  return {
    source: "sanity",
    title: update.title,
    slug: update.slug,
    category: update.category,
    categoryLabel: sanityCategoryLabels[update.category],
    excerpt: update.excerpt,
    contentDate: update.contentDate,
    publishedAt: update.publishedAt,
    featured: update.featured,
    showOnHome: update.showOnHome,
    image: buildSanityImage(update.mainImage, update.mainImageAlt, urlForSanityImage),
    externalUrl: update.externalUrl,
    externalLabel: update.externalLabel,
    videoUrl: update.videoUrl,
  };
}

function mergeMediaUpdates(
  markdownUpdates: MediaUpdateListItem[],
  sanityUpdates: MediaUpdateListItem[],
) {
  const updatesBySlug = new Map<string, MediaUpdateListItem>();

  for (const update of markdownUpdates) {
    updatesBySlug.set(update.slug, update);
  }

  for (const update of sanityUpdates) {
    updatesBySlug.set(update.slug, update);
  }

  return Array.from(updatesBySlug.values()).sort(sortByContentDateNewestFirst);
}

async function getSanityUpdateListItems(): Promise<MediaUpdateListItem[]> {
  try {
    const [{ getAllUpdateEntries }, { urlForSanityImage }] = await Promise.all([
      import("@/sanity/updateEntries"),
      import("@/sanity/image"),
    ]);
    const sanityUpdates = await getAllUpdateEntries();

    return sanityUpdates.map((update) =>
      mapSanityUpdateToListItem(update, urlForSanityImage),
    );
  } catch (error) {
    console.warn(
      "Sanity update entries could not be loaded; falling back to Markdown updates.",
      error,
    );
    return [];
  }
}

export async function getAllMediaUpdateListItems() {
  const markdownUpdates = getAllUpdates().map(mapMarkdownUpdateToListItem);
  const sanityUpdates = await getSanityUpdateListItems();

  return mergeMediaUpdates(markdownUpdates, sanityUpdates);
}

export async function getFeaturedMediaUpdateListItems() {
  const updates = await getAllMediaUpdateListItems();
  return updates.filter((update) => update.featured);
}

export async function getMediaUpdateStaticSlugs() {
  const slugSet = new Set(getUpdateSlugs());

  try {
    const { getUpdateEntrySlugs } = await import("@/sanity/updateEntries");
    const sanitySlugs = await getUpdateEntrySlugs();

    for (const { slug } of sanitySlugs) {
      slugSet.add(slug);
    }
  } catch (error) {
    console.warn(
      "Sanity update slugs could not be loaded; using Markdown slugs only.",
      error,
    );
  }

  return Array.from(slugSet);
}

export async function getSanityUpdateEntryBySlug(
  slug: string,
): Promise<UpdateEntryDetail | null> {
  try {
    const { getUpdateEntryBySlug } = await import("@/sanity/updateEntries");
    return getUpdateEntryBySlug(slug);
  } catch (error) {
    console.warn(
      `Sanity update entry "${slug}" could not be loaded; falling back to Markdown.`,
      error,
    );
    return null;
  }
}

export function getMediaUpdateTimelineItems(
  updates: MediaUpdateListItem[],
  slugs: readonly string[],
) {
  return slugs
    .map((slug) => updates.find((update) => update.slug === slug))
    .filter((update) => update !== undefined);
}

export { formatUpdateDate, formatUpdateDate as formatMediaUpdateDate };
