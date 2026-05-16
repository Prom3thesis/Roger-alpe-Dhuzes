import { SectionContainer } from "@/components/layout/SectionContainer";

const transformationFacts = [
  {
    label: "Startpunt",
    value: "208 kilo",
  },
  {
    label: "Keerpunt",
    value: "September 2023",
  },
  {
    label: "Verandering",
    value: "Ruim 100 kilo afgevallen",
  },
];

export function TransformationSection() {
  return (
    <SectionContainer className="py-14 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Ruim 100 kilo afgevallen
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          Roger viel ruim 100 kilo af. Juist daardoor werd de belofte aan zijn
          moeder niet alleen emotioneel belangrijk, maar ook fysiek mogelijk om
          echt te gaan najagen.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {transformationFacts.map((fact) => (
          <article
            className="rounded-lg border border-campaign-border bg-white p-6 text-center shadow-[0_14px_45px_rgb(6_25_47_/_0.07)]"
            key={fact.label}
          >
            <p className="text-xs font-black uppercase tracking-normal text-campaign-red">
              {fact.label}
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-campaign-navy">
              {fact.value}
            </h3>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
