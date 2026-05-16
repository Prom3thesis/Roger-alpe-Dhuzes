import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import type { Sponsor } from "@/data/sponsors";

type SponsorGridProps = {
  sponsors: Sponsor[];
};

export function SponsorGrid({ sponsors }: SponsorGridProps) {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-blue">
            Steun uit de regio
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Sponsors en betrokken organisaties
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Deze supporters helpen Rogers campagne zichtbaar te maken in de
            regio. Hun steun is onderdeel van het draagvlak rond zijn
            Alpe d&apos;HuZes-missie.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sponsors.map((sponsor) => (
            <article
              className="flex h-full flex-col rounded-lg border border-campaign-border bg-campaign-background p-3 shadow-[0_14px_34px_rgb(6_25_47_/_0.08)]"
              key={sponsor.id}
            >
              {sponsor.image ? (
                <div className="rounded-md bg-white">
                  <Image
                    alt={sponsor.imageAlt ?? sponsor.name}
                    className="aspect-[1754/1240] w-full rounded-md object-contain p-2"
                    height={1240}
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                    src={sponsor.image}
                    width={1754}
                  />
                </div>
              ) : (
                <div className="grid aspect-[1754/1240] place-items-center rounded-md bg-white p-4 text-center text-sm font-black text-campaign-navy">
                  {sponsor.name}
                </div>
              )}

              <h3 className="mt-4 break-words text-base font-black leading-snug text-campaign-navy">
                {sponsor.name}
              </h3>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
