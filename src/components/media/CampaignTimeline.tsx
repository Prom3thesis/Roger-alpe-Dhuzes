import Link from "next/link";

import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  formatUpdateDate,
  type MediaUpdateListItem,
} from "@/lib/content/media-updates-hybrid";

type CampaignTimelineProps = {
  updates: MediaUpdateListItem[];
};

export function CampaignTimeline({ updates }: CampaignTimelineProps) {
  return (
    <section className="bg-campaign-background">
      <SectionContainer className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Tijdlijn
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Van eerste motivatie naar zichtbare campagne.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            De tijdlijn gebruikt dezelfde updatecontent als het overzicht. Zo
            blijft dit blok compact zonder een tweede losse bron naast de
            Markdownupdates te worden.
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update) => {
            return (
              <li
                className="rounded-lg border border-campaign-border bg-white p-5 shadow-shell"
                key={update.slug}
              >
                <time
                  className="text-xs font-black uppercase tracking-normal text-campaign-red"
                  dateTime={update.contentDate}
                >
                  {formatUpdateDate(update.contentDate)}
                </time>
                <h3 className="mt-3 text-xl font-black leading-tight text-campaign-navy">
                  {update.title}
                </h3>
                <Link
                  className="mt-4 inline-flex text-sm font-black text-campaign-blue underline-offset-4 hover:underline"
                  href={`/media-updates/${update.slug}`}
                >
                  Bekijk moment
                </Link>
              </li>
            );
          })}
        </ol>
      </SectionContainer>
    </section>
  );
}
