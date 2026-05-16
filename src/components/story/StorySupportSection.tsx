import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type StorySupportSectionProps = {
  goalLabel: string;
};

export function StorySupportSection({ goalLabel }: StorySupportSectionProps) {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Waarom steun nodig is
        </h2>
        <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Iedere deelnemer aan Alpe d&apos;HuZes moet minimaal {goalLabel}
            ophalen. Voor Roger is dat doel hetzelfde: {goalLabel} voor zijn
            offici&euml;le actie.
          </p>
          <p>
            Steun maakt deze deelname praktisch mogelijk en geeft betekenis aan
            de belofte die hem naar deze berg brengt. Daarom leidt deze website
            bewust naar de pagina Doneren / Steunen.
          </p>
        </div>
        <Button className="mt-7" href="/doneren" variant="secondary">
          Steun Rogers belofte
        </Button>
      </div>

      <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-[0_18px_55px_rgb(6_25_47_/_0.08)] sm:p-8">
        <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
          Donatiedoel
        </p>
        <p className="mt-3 text-5xl font-black leading-none text-campaign-navy sm:text-6xl">
          {goalLabel}
        </p>
        <p className="mt-4 text-sm leading-6 text-campaign-muted">
          De actuele tussenstand wordt later alleen getoond wanneer die
          betrouwbaar beschikbaar is.
        </p>
      </div>
    </SectionContainer>
  );
}
