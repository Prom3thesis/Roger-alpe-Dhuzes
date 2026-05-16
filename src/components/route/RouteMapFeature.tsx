import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";

export function RouteMapFeature() {
  return (
    <section className="bg-campaign-background">
      <SectionContainer className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Route-map
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            De tocht wordt zichtbaar op de kaart.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            De routekaart maakt de berg concreet. Niet als decoratie, maar als
            het beeld van de opgave waar Roger naartoe traint.
          </p>
        </div>

        <figure className="mt-9 overflow-hidden rounded-lg border border-campaign-border bg-white p-3 shadow-[0_24px_80px_rgb(6_25_47_/_0.12)] sm:p-5">
          <Image
            alt="Routekaart van de wandelroute tijdens Alpe d'HuZes."
            className="mx-auto max-h-[92vh] w-full object-contain"
            height={1491}
            priority
            sizes="100vw"
            src="/images/route/alpe-dhuzes-walk-route-map.png"
            width={1055}
          />
          <figcaption className="border-t border-campaign-border px-2 py-4 text-sm leading-6 text-campaign-muted sm:px-4">
            De digitale route-map blijft hier volledig zichtbaar. Een eventuele
            zoom- of detailweergave hoort pas bij een latere polishfase.
          </figcaption>
        </figure>
      </SectionContainer>
    </section>
  );
}
