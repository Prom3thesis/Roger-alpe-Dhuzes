import { SectionContainer } from "@/components/layout/SectionContainer";

export function ImpossibleWeightSection() {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:items-center">
      <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-[0_18px_55px_rgb(6_25_47_/_0.08)] sm:p-8">
        <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
          Destijds
        </p>
        <p className="mt-3 text-5xl font-black leading-none text-campaign-navy sm:text-6xl">
          208 kilo
        </p>
      </div>

      <div className="max-w-3xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          208 kilo: waarom het onmogelijk leek
        </h2>
        <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Roger woog destijds 208 kilo. Een zware bergtocht als
            Alpe d&apos;HuZes was daardoor niet realistisch en zijn mobiliteit
            maakte de belofte bijna onuitvoerbaar.
          </p>
          <p>
            Toch verdween de belofte niet. Ze bleef bestaan, ook in de jaren
            waarin het vooral een gedachte leek die nog geen echte vorm kon
            krijgen.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
