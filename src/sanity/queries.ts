import {defineQuery} from "next-sanity";

const publicUpdateEntryFilter = `_type == "updateEntry" && defined(slug.current) && defined(publishedAt)`;

const updateEntryListProjection = `{
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  contentDate,
  publishedAt,
  "featured": coalesce(featured, false),
  "showOnHome": coalesce(showOnHome, false),
  mainImage,
  mainImageAlt,
  externalUrl,
  externalLabel,
  videoUrl
}`;

const updateEntryDetailProjection = `{
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  body,
  contentDate,
  publishedAt,
  "featured": coalesce(featured, false),
  "showOnHome": coalesce(showOnHome, false),
  mainImage,
  mainImageAlt,
  externalUrl,
  externalLabel,
  videoUrl,
  seoTitle,
  seoDescription,
  socialImage
}`;

export const allUpdateEntriesQuery = defineQuery(`
  *[${publicUpdateEntryFilter}]
  | order(contentDate desc, publishedAt desc)
  ${updateEntryListProjection}
`);

export const featuredUpdateEntriesQuery = defineQuery(`
  *[${publicUpdateEntryFilter} && featured == true]
  | order(contentDate desc, publishedAt desc)
  ${updateEntryListProjection}
`);

export const updateEntryBySlugQuery = defineQuery(`
  *[${publicUpdateEntryFilter} && slug.current == $slug][0]
  ${updateEntryDetailProjection}
`);

export const updateEntrySlugsQuery = defineQuery(`
  *[${publicUpdateEntryFilter}]
  | order(contentDate desc, publishedAt desc)
  {
    "slug": slug.current
  }
`);

export const updateEntriesByCategoryQuery = defineQuery(`
  *[${publicUpdateEntryFilter} && category == $category]
  | order(contentDate desc, publishedAt desc)
  ${updateEntryListProjection}
`);
