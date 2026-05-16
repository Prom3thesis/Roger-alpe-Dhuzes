import { SectionContainer } from "@/components/layout/SectionContainer";

const timelineItems = [
  {
    label: "Motivatie",
    title: "De belofte wordt een campagne",
    text: "Rogers deelname begint bij het verhaal achter zijn belofte aan zijn moeder.",
  },
  {
    label: "Training",
    title: "Opbouw in sportschool en op loopband",
    text: "De voorbereiding krijgt vorm in gerichte training, conditieopbouw en herhaling.",
  },
  {
    label: "Realiteit",
    title: "Geduld, spanning en terugslag",
    text: "De weg naar de berg vraagt ook omgaan met ongeduld en fysieke grenzen.",
  },
  {
    label: "Buiten",
    title: "Offroad training van 7,47 km",
    text: "Een bevestigde trainingsupdate maakt zichtbaar dat de voorbereiding ook buiten plaatsvindt.",
  },
  {
    label: "Media",
    title: "Aandacht van RTV Parkstad",
    text: "De campagne krijgt publieke zichtbaarheid en laat zien dat Rogers actie leeft.",
  },
  {
    label: "4 juni 2026",
    title: "Richting Alpe d'HuZes",
    text: "De berg komt dichterbij: de plek waar training, verhaal en steun samenkomen.",
  },
];

export function RouteCampaignTimeline() {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Campagnetijdlijn
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Compacte lijn richting de beklimming.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Dit is geen volledige updatepagina, maar een korte ordening van de
            bevestigde bouwstenen: verhaal, training, realiteit, media-aandacht
            en de dag waarop de tocht werkelijkheid moet worden.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timelineItems.map((item) => (
            <article
              className="rounded-lg border border-campaign-border bg-campaign-background p-5"
              key={item.title}
            >
              <p className="text-xs font-black uppercase tracking-normal text-campaign-red">
                {item.label}
              </p>
              <h3 className="mt-3 text-xl font-black leading-tight text-campaign-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-campaign-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
