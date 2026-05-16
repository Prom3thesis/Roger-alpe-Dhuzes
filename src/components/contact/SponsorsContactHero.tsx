import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function SponsorsContactHero() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Sponsors &amp; contact
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
            Steun uit de regio. Contact rond Rogers campagne.
          </h1>
        </div>

        <div className="max-w-2xl lg:justify-self-end">
          <p className="text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Hier komen regionale steun, sponsorwaardering en praktische vragen
            samen. Ook bestellingen voor steunproducten en deelname aan de
            herinneringsactie lopen via persoonlijk contact.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap"
              href="/doneren"
            >
              Doneer aan Rogers actie
            </Button>
            <Button
              className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15 sm:w-auto sm:whitespace-nowrap"
              href="/doneren"
              variant="outline"
            >
              Bekijk de steunproducten
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
