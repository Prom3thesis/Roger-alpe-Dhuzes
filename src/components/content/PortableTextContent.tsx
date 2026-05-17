import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { urlForSanityImage } from "@/sanity/image";
import type { PortableTextImageBlock, UpdateEntryBody } from "@/sanity/types";

type PortableTextContentProps = {
  value: UpdateEntryBody;
};

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-8 text-campaign-muted sm:text-lg sm:leading-8">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="pt-4 text-2xl font-black leading-tight tracking-normal text-campaign-navy sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-2 text-xl font-black leading-tight tracking-normal text-campaign-navy sm:text-2xl">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-campaign-gold bg-campaign-background px-5 py-4 text-xl font-black leading-8 text-campaign-navy">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 pl-5 text-base leading-7 text-campaign-muted sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2 pl-5 text-base leading-7 text-campaign-muted sm:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc">{children}</li>,
    number: ({ children }) => <li className="list-decimal">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-black text-campaign-navy">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "";
      const isExternal = /^https?:\/\//.test(href);

      if (!href) {
        return <>{children}</>;
      }

      if (isExternal) {
        return (
          <a
            className="font-bold text-campaign-blue underline underline-offset-4 hover:text-campaign-red"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          className="font-bold text-campaign-blue underline underline-offset-4 hover:text-campaign-red"
          href={href}
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const image = value as PortableTextImageBlock;

      if (!image.asset?._ref) {
        return null;
      }

      const src = urlForSanityImage(image)
        .width(1200)
        .height(760)
        .fit("max")
        .auto("format")
        .url();

      return (
        <figure className="overflow-hidden rounded-lg border border-campaign-border bg-campaign-background">
          <Image
            alt={image.alt ?? ""}
            className="h-auto w-full object-cover"
            height={760}
            sizes="(min-width: 1024px) 896px, calc(100vw - 40px)"
            src={src}
            width={1200}
          />
          {image.alt ? (
            <figcaption className="px-4 py-3 text-sm leading-6 text-campaign-muted">
              {image.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function PortableTextContent({ value }: PortableTextContentProps) {
  return (
    <div className="space-y-6">
      <PortableText components={portableTextComponents} value={value} />
    </div>
  );
}
