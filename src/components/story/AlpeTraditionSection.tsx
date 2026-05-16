import { SectionContainer } from "@/components/layout/SectionContainer";

export function AlpeTraditionSection() {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Samen Alpe d&apos;HuZes kijken
          </h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            <p>
              Alpe d&apos;HuZes had al jarenlang een plek in hun gezamenlijke
              beleving. Roger en zijn moeder keken samen naar het evenement,
              zagen wat de berg voor mensen betekende en kwamen er telkens op
              terug.
            </p>
            <p>
              Daardoor werd Alpe d&apos;HuZes meer dan een uitzending of een
              sportieve prestatie. Het werd een terugkerend moment waarin de
              gedachte kon groeien: ooit, als het lichaam het zou toelaten,
              misschien zelf.
            </p>
          </div>
        </div>

        <aside className="rounded-lg border border-campaign-border bg-campaign-background p-6">
          <p className="text-xl font-black leading-snug text-campaign-navy sm:text-2xl">
            Wat eerst iets was om samen naar te kijken, werd later de berg waar
            Rogers belofte naartoe zou wijzen.
          </p>
        </aside>
      </SectionContainer>
    </section>
  );
}
