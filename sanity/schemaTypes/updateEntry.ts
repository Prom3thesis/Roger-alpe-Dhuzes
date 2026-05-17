import {CalendarIcon} from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from "sanity";

const updateEntryCategories = [
  {title: "Dagboek", value: "diary"},
  {title: "Campagne", value: "campaign"},
  {title: "Media", value: "media"},
] as const;

const categoryTitles = new Map(
  updateEntryCategories.map((category) => [category.value, category.title]),
);

type ImageAwareParent = {
  mainImage?: unknown;
};

export const updateEntry = defineType({
  name: "updateEntry",
  title: "Update",
  type: "document",
  icon: CalendarIcon,
  groups: [
    {name: "basis", title: "Basis", default: true},
    {name: "content", title: "Inhoud"},
    {name: "publishing", title: "Planning & publicatie"},
    {name: "media", title: "Beeld & media"},
    {name: "seo", title: "SEO"},
    {name: "internal", title: "Intern"},
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      group: "basis",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basis",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      group: "basis",
      options: {
        list: [...updateEntryCategories],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Korte samenvatting",
      type: "text",
      rows: 3,
      group: "basis",
      validation: (rule) =>
        rule
          .required()
          .max(220)
          .warning("Houd de samenvatting bij voorkeur kort voor kaarten en previews."),
    }),
    defineField({
      name: "body",
      title: "Inhoud",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({type: "block"}),
        defineArrayMember({
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Alttekst",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "contentDate",
      title: "Inhoudsdatum",
      type: "date",
      group: "publishing",
      description:
        "Datum van de gebeurtenis of update. Deze datum bepaalt de inhoudelijke tijdlijn.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicatiedatum",
      type: "datetime",
      group: "publishing",
      description:
        "Mag leeg blijven in draft. Bij de eerste publicatie wordt dit automatisch gevuld als het nog leeg is.",
    }),
    defineField({
      name: "mainImage",
      title: "Hoofdafbeelding",
      type: "image",
      group: "media",
      options: {hotspot: true},
    }),
    defineField({
      name: "mainImageAlt",
      title: "Alttekst hoofdafbeelding",
      type: "string",
      group: "media",
      hidden: ({parent}) => !(parent as ImageAwareParent | undefined)?.mainImage,
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as ImageAwareParent | undefined;

          if (parent?.mainImage && !value) {
            return "Alttekst is verplicht wanneer een hoofdafbeelding is ingevuld.";
          }

          return true;
        }),
    }),
    defineField({
      name: "socialImage",
      title: "Social afbeelding",
      type: "image",
      group: "media",
      options: {hotspot: true},
      description:
        "Optionele aparte afbeelding voor delen op sociale media. SEO-koppeling volgt in een latere fase.",
    }),
    defineField({
      name: "featured",
      title: "Uitgelicht op Media & Updates",
      type: "boolean",
      group: "basis",
      initialValue: false,
    }),
    defineField({
      name: "showOnHome",
      title: "Toon op Home",
      type: "boolean",
      group: "basis",
      initialValue: false,
      description:
        "Voor de latere homepage-teaser. Dit heeft nu nog geen effect op de frontend.",
    }),
    defineField({
      name: "externalUrl",
      title: "Externe link",
      type: "url",
      group: "media",
      validation: (rule) => rule.uri({scheme: ["http", "https"]}),
    }),
    defineField({
      name: "externalLabel",
      title: "Label externe link",
      type: "string",
      group: "media",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {externalUrl?: string} | undefined;

          if (parent?.externalUrl && !value) {
            return "Vul een duidelijk linklabel in wanneer er een externe link is.";
          }

          return true;
        }),
    }),
    defineField({
      name: "videoUrl",
      title: "Video-URL",
      type: "url",
      group: "media",
      validation: (rule) => rule.uri({scheme: ["http", "https"]}),
    }),
    defineField({
      name: "sourceContext",
      title: "Broncontext",
      type: "text",
      rows: 3,
      group: "internal",
      description:
        "Interne notitie over herkomst, bijvoorbeeld Facebookpost, PDF of handmatige update.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string",
      group: "seo",
      validation: (rule) =>
        rule.max(70).warning("SEO-titels werken meestal beter onder circa 70 tekens."),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO-omschrijving",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (rule) =>
        rule
          .max(160)
          .warning("SEO-omschrijvingen werken meestal beter onder circa 160 tekens."),
    }),
  ],
  orderings: [
    {
      name: "contentDateDesc",
      title: "Inhoudsdatum nieuw naar oud",
      by: [{field: "contentDate", direction: "desc"}],
    },
    {
      name: "publishedAtDesc",
      title: "Publicatiedatum nieuw naar oud",
      by: [{field: "publishedAt", direction: "desc"}],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      contentDate: "contentDate",
      media: "mainImage",
    },
    prepare({title, category, contentDate, media}) {
      const categoryTitle = categoryTitles.get(category) ?? "Update";
      const subtitle = contentDate
        ? `${categoryTitle} - ${contentDate}`
        : categoryTitle;

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
