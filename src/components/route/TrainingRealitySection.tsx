import { SectionContainer } from "@/components/layout/SectionContainer";

const realityPoints = [
  "Niet elke training loopt vanzelf soepel.",
  "Te snel willen opbouwen kan fysieke terugslag geven.",
  "Juist geduld, bijstellen en doorgaan maken de voorbereiding echt.",
];

export function TrainingRealitySection() {
  return (
    <section className="bg-campaign-background">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
              Mentale en fysieke realiteit
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              De voorbereiding is serieus omdat hij niet altijd makkelijk is.
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              De route naar Alpe d&apos;HuZes vraagt ook realisme. Roger werkt
              richting de berg met spanning, ongeduld en de noodzaak om naar
              zijn lichaam te blijven luisteren.
            </p>
          </div>

          <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-[0_18px_55px_rgb(6_25_47_/_0.07)]">
            <h3 className="text-2xl font-black leading-tight text-campaign-navy">
              Eerlijke voorbereiding
            </h3>
            <ul className="mt-5 grid gap-3">
              {realityPoints.map((point) => (
                <li
                  className="rounded-md border border-campaign-border bg-campaign-background px-4 py-3 text-sm font-bold leading-6 text-campaign-navy"
                  key={point}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
