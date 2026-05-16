import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { remembranceActions } from "@/data/remembrance-actions";

export function MemorialSupportTeaser() {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.88fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-campaign-border bg-campaign-background shadow-[0_18px_55px_rgb(6_25_47_/_0.10)]">
          <Image
            alt="Engelen en kaarshouders met namen als onderdeel van Rogers herinneringsactie."
            className="aspect-[4/3] w-full object-cover object-center"
            height={1448}
            sizes="(min-width: 1024px) 42vw, 100vw"
            src="/images/remembrance/remembrance-angels-tealights.png"
            width={1086}
          />
        </div>

        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Betekenisvolle steunroute
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Herinneringsactie
          </h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            <p>
              Naast direct doneren en steunproducten is er een aparte
              herinneringsactie. Daarin zijn meerdere tastbare vormen om
              iemand waardig te herdenken.
            </p>
            <p>
              Ook hiervan gaat de volledige opbrengst naar Rogers Alpe
              d&apos;HuZes-donaties. De volledige uitleg hoort op de aparte
              herinneringsactiepagina.
            </p>
          </div>

          <div className="mt-7 grid gap-3">
            {remembranceActions.map((option) => (
              <div
                className="flex items-start justify-between gap-4 rounded-lg border border-campaign-border bg-campaign-background p-4"
                key={option.id}
              >
                <p className="font-black leading-snug text-campaign-navy">
                  {option.name}
                </p>
                <p className="shrink-0 font-black text-campaign-red">
                  {option.priceLabel}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-bold leading-6 text-campaign-muted">
            Het Alpe d&apos;HuZes-jasje blijft daarna als herdenking ophangen.
          </p>

          <Button className="mt-7" href="/herinneringsactie" variant="outline">
            Bekijk de herinneringsactie
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
