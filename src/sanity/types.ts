import type {PortableTextBlock} from "sanity";

export const updateEntryCategories = ["diary", "campaign", "media"] as const;

export type UpdateEntryCategory = (typeof updateEntryCategories)[number];

export type SanityImageReference = {
  _type: "reference";
  _ref: string;
};

export type SanityImageCrop = {
  _type?: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type?: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageObject = {
  _type: "image";
  asset?: SanityImageReference;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type PortableTextImageBlock = SanityImageObject & {
  _key?: string;
  alt?: string;
};

export type UpdateEntryBody = Array<PortableTextBlock | PortableTextImageBlock>;

export type UpdateEntryListItem = {
  _id: string;
  title: string;
  slug: string;
  category: UpdateEntryCategory;
  excerpt: string;
  contentDate: string;
  publishedAt: string;
  featured: boolean;
  showOnHome: boolean;
  mainImage?: SanityImageObject | null;
  mainImageAlt?: string | null;
  externalUrl?: string | null;
  externalLabel?: string | null;
  videoUrl?: string | null;
};

export type UpdateEntryDetail = UpdateEntryListItem & {
  body: UpdateEntryBody;
  seoTitle?: string | null;
  seoDescription?: string | null;
  socialImage?: SanityImageObject | null;
};

export type UpdateEntrySlug = {
  slug: string;
};
