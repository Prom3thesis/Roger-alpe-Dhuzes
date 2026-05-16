import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

const transformationStats = [
  {
    label: "Ooit",
    value: "208 kilo",
    text: "De belofte voelde lang bijna onhaalbaar door Rogers gewicht en beperkte mobiliteit.",
  },
  {
    label: "Keerpunt",
    value: "September 2023",
    text: "Na een gastric bypass begon de fysieke verandering die ruimte maakte voor deze tocht.",
  },
  {
    label: "Nu",
    value: "Ruim 100 kilo",
    text: "Roger viel ruim 100 kilo af en kan de belofte aan zijn moeder echt proberen waar te maken.",
  },
];

export function TransformationHighlight() {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              Van 208 kilo naar Alpe d&apos;HuZes
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              De deelname van Roger is niet vanzelfsprekend. Juist zijn
              fysieke transformatie maakt duidelijk waarom deze berg zoveel
              betekenis heeft.
            </p>
            <Button className="mt-7" href="/mijn-verhaal" variant="outline">
              Lees mijn verhaal
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {transformationStats.map((stat) => (
              <article
                className="rounded-lg border border-campaign-border bg-campaign-background p-5"
                key={stat.value}
              >
                <p className="text-xs font-black uppercase text-campaign-red">
                  {stat.label}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-campaign-navy">
                  {stat.value}
                </h3>
                <p className="mt-3 text-sm leading-6 text-campaign-muted">
                  {stat.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
