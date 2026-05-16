import { SectionContainer } from "@/components/layout/SectionContainer";

export function TurningPointSection() {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            September 2023: het keerpunt
          </h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            <p>
              In september 2023 kreeg Roger een gastric bypass. Daarmee begon
              een fysieke verandering die stap voor stap ruimte maakte voor wat
              eerder buiten bereik lag.
            </p>
            <p>
              De belofte aan zijn moeder kreeg daardoor opnieuw gewicht, maar
              nu op een andere manier: niet langer als iets wat onmogelijk
              bleef, maar als iets waar hij naartoe kon gaan werken.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-campaign-border bg-campaign-background p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-blue">
            Keerpunt
          </p>
          <p className="mt-4 text-2xl font-black leading-snug text-campaign-navy sm:text-3xl">
            Wat jarenlang niet haalbaar leek, kwam langzaam terug binnen
            bereik.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
