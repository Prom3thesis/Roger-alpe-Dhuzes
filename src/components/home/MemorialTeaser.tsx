import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function MemorialTeaser() {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.9fr_1fr] lg:items-center">
      <div className="overflow-hidden rounded-lg border border-campaign-border bg-white shadow-[0_18px_55px_rgb(6_25_47_/_0.10)]">
        <Image
          alt="Engelen en kaarshouders met namen als onderdeel van Rogers herinneringsactie."
          className="aspect-[4/5] w-full object-cover object-center sm:aspect-[4/3] lg:aspect-[4/5]"
          height={1448}
          sizes="(min-width: 1024px) 42vw, 100vw"
          src="/images/remembrance/remembrance-angels-tealights.png"
          width={1086}
        />
      </div>

      <div className="max-w-3xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Een licht voor wie gemist wordt
        </h2>
        <div className="mt-5 grid gap-4 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Roger loopt niet alleen voor zijn moeder. Hij wil ook een licht
            laten branden voor anderen die door kanker zijn geraakt en gemist
            worden.
          </p>
          <p>
            Via kaarshouders met kaars en naam krijgt die herinnering een
            tastbare, waardige vorm.
          </p>
        </div>
        <Button className="mt-7" href="/herinneringsactie" variant="secondary">
          Bekijk de herinneringsactie
        </Button>
      </div>
    </SectionContainer>
  );
}
