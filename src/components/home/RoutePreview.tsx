import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function RoutePreview() {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.86fr] lg:items-center">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          De tocht wordt concreet
        </h2>
        <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          De berg is het letterlijke eindpunt van Rogers belofte. De route
          vraagt voorbereiding, training en doorzettingsvermogen. Op de pagina
          De tocht wordt zichtbaar wat hem te wachten staat.
        </p>
        <Button className="mt-7" href="/de-tocht" variant="secondary">
          Bekijk de tocht
        </Button>
      </div>

      <div className="rounded-lg border border-campaign-border bg-white p-4 shadow-[0_18px_55px_rgb(6_25_47_/_0.10)]">
        <Image
          alt="Routekaart van de wandelroute tijdens Alpe d'HuZes."
          className="max-h-[36rem] w-full object-contain"
          height={1491}
          sizes="(min-width: 1024px) 42vw, 100vw"
          src="/images/route/alpe-dhuzes-walk-route-map.png"
          width={1055}
        />
      </div>
    </SectionContainer>
  );
}
