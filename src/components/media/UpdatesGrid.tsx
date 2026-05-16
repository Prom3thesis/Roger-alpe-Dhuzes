import Link from "next/link";

import { SectionContainer } from "@/components/layout/SectionContainer";
import type { UpdateEntry } from "@/lib/content/updates";
import {
  formatUpdateDate,
  updateCategoryLabels,
} from "@/lib/content/updates";

type UpdatesGridProps = {
  updates: UpdateEntry[];
};

export function UpdatesGrid({ updates }: UpdatesGridProps) {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
              Alle updates
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              De campagne in volgorde van nu naar start.
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted">
              Alle beschikbare updates blijven hier zichtbaar, ook wanneer ze
              eerder al zijn uitgelicht. Zo blijft het overzicht compleet en
              eenvoudig te scannen.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {updates.map((update) => {
              const { metadata } = update;

              return (
                <article
                  className="rounded-lg border border-campaign-border bg-campaign-background p-5"
                  key={metadata.slug}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-normal text-campaign-red">
                      {updateCategoryLabels[metadata.category]}
                    </span>
                    <time
                      className="text-xs font-bold text-campaign-muted"
                      dateTime={metadata.date}
                    >
                      {formatUpdateDate(metadata.date)}
                    </time>
                  </div>
                  <h3 className="mt-3 text-xl font-black leading-tight text-campaign-navy">
                    {metadata.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-campaign-muted">
                    {metadata.excerpt}
                  </p>
                  <Link
                    className="mt-5 inline-flex text-sm font-black text-campaign-blue underline-offset-4 hover:underline"
                    href={`/media-updates/${metadata.slug}`}
                  >
                    Lees update
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
