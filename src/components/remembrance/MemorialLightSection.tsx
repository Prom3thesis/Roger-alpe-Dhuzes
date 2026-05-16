import { SectionContainer } from "@/components/layout/SectionContainer";

export function MemorialLightSection() {
  return (
    <section className="bg-white">
      <SectionContainer
        as="div"
        className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.55fr_1fr] lg:items-start"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Een licht voor wie we missen
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Herinneren krijgt hier een tastbare plek.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Roger loopt Alpe d&apos;HuZes vanuit een persoonlijke belofte, maar
            met deze actie maakt hij ook ruimte voor namen en herinneringen van
            anderen.
          </p>
          <p>
            De herinneringsactie verbindt persoonlijk gemis met een concrete
            bijdrage aan zijn Alpe d&apos;HuZes-donaties. Het is een rustige
            manier om iemand zichtbaar mee te dragen.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
