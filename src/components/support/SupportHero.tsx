import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type SupportHeroProps = {
  donationUrl: string;
  goalLabel: string;
};

export function SupportHero({ donationUrl, goalLabel }: SupportHeroProps) {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
            Help Roger zijn belofte waar te maken
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Roger loopt Alpe d&apos;HuZes vanuit een persoonlijke belofte. Zijn
            donatiedoel is {goalLabel}. Je kunt direct doneren of hem steunen
            via producten en de herinneringsactie.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              href={donationUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Doneer direct
            </Button>
            <Button
              className="w-full border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 sm:w-auto"
              href="/mijn-verhaal"
              variant="outline"
            >
              Bekijk mijn verhaal
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-shell sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Drie steunroutes
          </p>
          <ol className="mt-5 grid gap-4">
            <li className="rounded-lg bg-white p-4 text-campaign-navy">
              <p className="text-xs font-black uppercase text-campaign-red">
                Primair
              </p>
              <p className="mt-1 text-xl font-black">Direct online doneren</p>
            </li>
            <li className="rounded-lg border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-black uppercase text-white/60">
                Praktisch
              </p>
              <p className="mt-1 text-xl font-black">Steunproducten</p>
            </li>
            <li className="rounded-lg border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-black uppercase text-white/60">
                Betekenisvol
              </p>
              <p className="mt-1 text-xl font-black">Herinneringsactie</p>
            </li>
          </ol>
        </div>
      </SectionContainer>
    </section>
  );
}
