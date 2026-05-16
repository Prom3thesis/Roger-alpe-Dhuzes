import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";

export function MotherBondSection() {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.62fr_1fr] lg:items-start">
      <div>
        <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
          Het begin
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Een bijzondere band met zijn moeder
        </h2>
        <figure className="mt-7 overflow-hidden rounded-lg border border-campaign-border bg-white shadow-[0_18px_55px_rgb(6_25_47_/_0.10)]">
          <Image
            alt="Portret van Riny Chappin-Plieger, de moeder van Roger."
            className="aspect-[3/4] w-full object-cover object-center"
            height={1448}
            sizes="(min-width: 1024px) 34vw, 100vw"
            src="/images/story/riny-chappin-plieger.jpg"
            width={1086}
          />
          <figcaption className="border-t border-campaign-border bg-campaign-background px-5 py-4 text-sm font-bold leading-6 text-campaign-muted">
            Riny Chappin-Plieger, Rogers moeder.
          </figcaption>
        </figure>
      </div>

      <div className="max-w-3xl space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
        <p>
          Voor Roger begint dit verhaal bij zijn moeder, Riny
          Chappin-Plieger. Zij was een belangrijke, beschermende aanwezigheid
          in zijn leven en de persoon aan wie deze tocht blijvend verbonden is.
        </p>
        <p>
          Daarom gaat deze deelname niet alleen over een berg beklimmen. Het
          verhaal begint bij de band tussen moeder en zoon, en bij iets wat
          lang persoonlijk bleef voordat het een campagne werd.
        </p>
      </div>
    </SectionContainer>
  );
}
