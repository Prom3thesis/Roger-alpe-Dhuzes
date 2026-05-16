import { SectionContainer } from "@/components/layout/SectionContainer";

type WhySupportMattersProps = {
  goalLabel: string;
};

export function WhySupportMatters({ goalLabel }: WhySupportMattersProps) {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Waarom elke bijdrage telt
        </h2>
        <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Iedere deelnemer moet minimaal {goalLabel} aan donaties ophalen.
            Rogers deelname staat in het teken van zijn belofte, kankeronderzoek
            en herinnering.
          </p>
          <p>
            Kleine en grotere bijdragen helpen hem richting dit doel. Samen
            maken ze de stap van persoonlijke belofte naar concrete steun voor
            Alpe d&apos;HuZes.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-[0_18px_55px_rgb(6_25_47_/_0.08)] sm:p-8">
        <p className="text-sm font-black uppercase tracking-normal text-campaign-blue">
          Donatiedoel
        </p>
        <p className="mt-3 text-5xl font-black leading-none text-campaign-navy sm:text-6xl">
          {goalLabel}
        </p>
        <p className="mt-4 text-sm leading-6 text-campaign-muted">
          De directe donatie blijft de hoofdroute op deze pagina.
        </p>
      </div>
    </SectionContainer>
  );
}
