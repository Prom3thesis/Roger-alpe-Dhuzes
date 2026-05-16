import { SectionContainer } from "@/components/layout/SectionContainer";

export function RegistrationSection() {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <div className="rounded-lg border border-campaign-border bg-campaign-background p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-blue">
            Van verlangen naar werkelijkheid
          </p>
          <p className="mt-4 text-2xl font-black leading-snug text-campaign-navy sm:text-3xl">
            De inschrijving maakte van de belofte een werkelijk traject richting
            Alpe d&apos;HuZes.
          </p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            De inschrijving lukt
          </h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            <p>
              Toen inschrijven voor de 20e Alpe d&apos;HuZes concreet werd,
              kreeg Rogers belofte een nieuwe spanning. De eerste kans werd
              gemist, maar bij een extra inschrijfmoment zaten meerdere mensen
              klaar om te helpen.
            </p>
            <p>
              Uiteindelijk lukte het. Vanaf dat moment was de berg geen verre
              gedachte meer, maar een concrete deelname waar training,
              voorbereiding en steun bij horen.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
