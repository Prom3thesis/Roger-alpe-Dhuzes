import { SectionContainer } from "@/components/layout/SectionContainer";

const challengePoints = [
  {
    title: "Geen losse sportprestatie",
    text: "De beklimming hoort bij de belofte die Roger aan zijn moeder deed. De berg maakt die belofte concreet.",
  },
  {
    title: "Een echte fysieke opgave",
    text: "De route vraagt voorbereiding, conditie en het vermogen om stap voor stap te blijven werken.",
  },
  {
    title: "Steun met betekenis",
    text: "Wie Roger steunt, steunt niet alleen een doelbedrag, maar ook de weg die hij aflegt om deze tocht te halen.",
  },
];

export function MountainChallengeIntro() {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
              Fysieke climax
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              De berg is de plek waar het verhaal in beweging komt.
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              Rogers deelname blijft niet bij een zin op papier. De tocht vraagt
              dat hij zijn lichaam voorbereidt op een echte beklimming, met alle
              spanning en opbouw die daarbij horen.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {challengePoints.map((point) => (
              <article
                className="rounded-lg border border-campaign-border bg-campaign-background p-5"
                key={point.title}
              >
                <h3 className="text-xl font-black leading-tight text-campaign-navy">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-campaign-muted">
                  {point.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
