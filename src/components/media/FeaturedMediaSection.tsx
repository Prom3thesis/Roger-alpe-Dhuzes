import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import type { MediaItem } from "@/data/media";

type FeaturedMediaSectionProps = {
  item: MediaItem | undefined;
};

export function FeaturedMediaSection({ item }: FeaturedMediaSectionProps) {
  if (!item) {
    return null;
  }

  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Featured media
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Roger te gast bij {item.outlet}.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Het RTV Parkstad-interview laat zien dat Rogers weg naar Alpe
            d&apos;HuZes niet alleen binnen zijn eigen kring leeft, maar ook
            regionaal aandacht krijgt.
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-lg border border-campaign-border bg-campaign-navy shadow-shell">
          {item.image ? (
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-64 overflow-hidden bg-campaign-navy sm:min-h-80 lg:min-h-full">
                <Image
                  alt={item.imageAlt ?? ""}
                  className="h-full w-full object-cover"
                  height={900}
                  sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
                  src={item.image}
                  width={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-campaign-navy/35 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-campaign-navy/86 px-3 py-2 text-xs font-black uppercase tracking-normal text-campaign-gold shadow-[0_12px_34px_rgb(0_0_0_/_0.24)]">
                  <span
                    aria-hidden="true"
                    className="flex size-7 items-center justify-center rounded-full bg-campaign-gold text-campaign-navy"
                  >
                    <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-current" />
                  </span>
                  Video-interview
                </div>
              </div>

              <div className="p-6 text-white sm:p-8 lg:p-10">
                <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
                  RTV Parkstad
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                  Bekijk Rogers interview bij RTV Parkstad.
                </h3>
                <p className="mt-4 text-base leading-7 text-white/76">
                  In het gesprek vertelt Roger over zijn deelname aan Alpe
                  d&apos;HuZes, zijn motivatie en de weg die hij aflegt richting
                  de berg.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {item.href ? (
                    <Button
                      className="w-full whitespace-normal px-4 py-3 text-center leading-tight"
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Bekijk het RTV Parkstad-interview
                    </Button>
                  ) : null}
                  <Button
                    className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15"
                    href="/media-updates/roger-bij-rtv-parkstad"
                    variant="outline"
                  >
                    Lees de update
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </SectionContainer>
    </section>
  );
}
