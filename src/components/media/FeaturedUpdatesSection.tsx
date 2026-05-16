import Image from "next/image";
import Link from "next/link";

import { SectionContainer } from "@/components/layout/SectionContainer";
import type { UpdateEntry } from "@/lib/content/updates";
import {
  formatUpdateDate,
  updateCategoryLabels,
} from "@/lib/content/updates";

type FeaturedUpdatesSectionProps = {
  updates: UpdateEntry[];
};

export function FeaturedUpdatesSection({ updates }: FeaturedUpdatesSectionProps) {
  if (updates.length === 0) {
    return null;
  }

  return (
    <section className="bg-campaign-background">
      <SectionContainer className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Uitgelicht
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Updates die de campagne dragen.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Deze selectie laat de hoofdlijn zien: waarom Roger loopt, hoe de
            training voelt, hoe de herinneringsactie ontstond en hoe RTV
            Parkstad aandacht gaf aan zijn verhaal.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {updates.map((update) => {
            const { metadata } = update;

            return (
              <article
                className="overflow-hidden rounded-lg border border-campaign-border bg-white shadow-shell"
                key={metadata.slug}
              >
                {metadata.featuredImage ? (
                  <Image
                    alt={metadata.featuredImageAlt ?? ""}
                    className="aspect-[16/10] w-full object-cover"
                    height={700}
                    sizes="(min-width: 768px) 50vw, calc(100vw - 40px)"
                    src={metadata.featuredImage}
                    width={1000}
                  />
                ) : null}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-campaign-border bg-campaign-background px-3 py-1 text-xs font-black uppercase tracking-normal text-campaign-red">
                      {updateCategoryLabels[metadata.category]}
                    </span>
                    <time
                      className="text-sm font-bold text-campaign-muted"
                      dateTime={metadata.date}
                    >
                      {formatUpdateDate(metadata.date)}
                    </time>
                  </div>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-campaign-navy">
                    {metadata.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-campaign-muted sm:text-base sm:leading-7">
                    {metadata.excerpt}
                  </p>
                  <Link
                    className="mt-5 inline-flex text-sm font-black text-campaign-blue underline-offset-4 hover:underline"
                    href={`/media-updates/${metadata.slug}`}
                  >
                    Lees update
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
