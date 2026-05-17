import {sanityClient} from "./client";
import {
  allUpdateEntriesQuery,
  featuredUpdateEntriesQuery,
  updateEntriesByCategoryQuery,
  updateEntryBySlugQuery,
  updateEntrySlugsQuery,
} from "./queries";
import type {
  UpdateEntryCategory,
  UpdateEntryDetail,
  UpdateEntryListItem,
  UpdateEntrySlug,
} from "./types";

export async function getAllUpdateEntries(): Promise<UpdateEntryListItem[]> {
  return sanityClient.fetch<UpdateEntryListItem[]>(allUpdateEntriesQuery);
}

export async function getFeaturedUpdateEntries(): Promise<UpdateEntryListItem[]> {
  return sanityClient.fetch<UpdateEntryListItem[]>(featuredUpdateEntriesQuery);
}

export async function getUpdateEntryBySlug(
  slug: string,
): Promise<UpdateEntryDetail | null> {
  if (!slug) {
    return null;
  }

  return sanityClient.fetch<UpdateEntryDetail | null>(updateEntryBySlugQuery, {
    slug,
  });
}

export async function getUpdateEntrySlugs(): Promise<UpdateEntrySlug[]> {
  return sanityClient.fetch<UpdateEntrySlug[]>(updateEntrySlugsQuery);
}

export async function getUpdateEntriesByCategory(
  category: UpdateEntryCategory,
): Promise<UpdateEntryListItem[]> {
  return sanityClient.fetch<UpdateEntryListItem[]>(
    updateEntriesByCategoryQuery,
    {category},
  );
}
