import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { featuredMediaItem } from "@/data/media";

export function MediaFeatureCard() {
  if (!featuredMediaItem) {
    return null;
  }

  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-8 rounded-lg border border-campaign-border bg-campaign-background p-5 shadow-[0_18px_55px_rgb(6_25_47_/_0.10)] sm:p-6 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          {featuredMediaItem.image ? (
            <Image
              alt={
                featuredMediaItem.imageAlt ??
                "Roger Chappin tijdens zijn bezoek aan RTV Parkstad."
              }
              className="aspect-[4/3] w-full rounded-lg object-cover object-center"
              height={2000}
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={featuredMediaItem.image}
              width={1500}
            />
          ) : null}

          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase text-campaign-red">
              In de media - RTV Parkstad
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              {featuredMediaItem.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              Roger was te gast bij {featuredMediaItem.outlet}. Die regionale
              aandacht maakt de campagne zichtbaarder en geeft bezoekers een
              concreet moment om verder te kijken.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/media-updates/roger-bij-rtv-parkstad"
                variant="secondary"
              >
                Bekijk het interview
              </Button>
              <Button href="/media-updates" variant="outline">
                Bekijk media &amp; updates
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
