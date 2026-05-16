import type { RemembranceAction } from "@/data/remembrance-actions";

import { SectionContainer } from "@/components/layout/SectionContainer";

type RemembranceActionsSectionProps = {
  actions: RemembranceAction[];
};

export function RemembranceActionsSection({
  actions,
}: RemembranceActionsSectionProps) {
  const objectActions = actions.filter((action) => action.kind === "object");
  const jacketAction = actions.find((action) => action.kind === "jacket");

  return (
    <section className="bg-campaign-background">
      <SectionContainer as="div" className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Drie herinneringsvormen
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Kies een vorm die past bij de herinnering.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            De actie bestaat uit twee tastbare herinneringsobjecten en een
            aparte symbolische jasjeactie. Samen horen ze bij de
            herinneringsactie, niet bij de gewone steunproducten.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_1fr_1.08fr]">
          {objectActions.map((action) => (
            <article
              className="rounded-lg border border-campaign-border bg-white p-6 shadow-[0_18px_55px_rgb(6_25_47_/_0.06)]"
              key={action.id}
            >
              <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
                Herinneringsobject
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-campaign-navy">
                {action.name}
              </h3>
              <p className="mt-4 text-4xl font-black text-campaign-navy">
                {action.priceLabel}
              </p>
              <p className="mt-4 text-sm leading-6 text-campaign-muted">
                {action.description}
              </p>
            </article>
          ))}

          {jacketAction ? (
            <article className="rounded-lg border border-campaign-gold/55 bg-campaign-navy p-6 text-white shadow-shell">
              <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
                Symbolische jasjeactie
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                {jacketAction.name}
              </h3>
              <p className="mt-4 text-4xl font-black text-campaign-gold">
                {jacketAction.priceLabel}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/78">
                {jacketAction.description}
              </p>
            </article>
          ) : null}
        </div>
      </SectionContainer>
    </section>
  );
}
