import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { sponsors } from "@/data/sponsors";

export function SponsorStrip() {
  return (
    <SectionContainer className="py-14 sm:py-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Steun uit de regio
          </h2>
          <p className="mt-4 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Lokale supporters en organisaties helpen Rogers campagne zichtbaar
            te maken. Hun steun versterkt het vertrouwen rondom deze actie.
          </p>
        </div>
        <Button href="/sponsors-contact" variant="outline">
          Bekijk sponsors &amp; contact
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {sponsors.map((sponsor) => (
          <article
            className="rounded-lg border border-campaign-border bg-white p-3 shadow-[0_14px_34px_rgb(6_25_47_/_0.08)]"
            key={sponsor.id}
          >
            {sponsor.image ? (
              <Image
                alt={sponsor.imageAlt ?? sponsor.name}
                className="aspect-[1754/1240] w-full rounded-md object-contain"
                height={1240}
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                src={sponsor.image}
                width={1754}
              />
            ) : (
              <div className="grid aspect-[1754/1240] place-items-center rounded-md bg-campaign-background p-4 text-center text-sm font-black text-campaign-navy">
                {sponsor.name}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
