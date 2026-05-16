import { SectionContainer } from "@/components/layout/SectionContainer";

export function PlacementAndMeaningSection() {
  return (
    <section className="bg-white">
      <SectionContainer
        as="div"
        className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.58fr_1fr] lg:items-start"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Plaatsing en symboliek
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            De herinnering krijgt eerst een plek dichtbij.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            In de projectbronnen is vastgelegd dat de herinneringsobjecten eerst
            een plek krijgen bij G.O.C. Parkstad. Daarmee blijft de actie
            verbonden met de mensen en gemeenschap rond Roger.
          </p>
          <p>
            De betekenis van de actie reist daarna mee richting Alpe
            d&apos;HuZes: de namen en herinneringen worden onderdeel van de weg
            naar de berg.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
