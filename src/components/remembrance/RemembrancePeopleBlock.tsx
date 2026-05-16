import { SectionContainer } from "@/components/layout/SectionContainer";

const peopleGroups = [
  {
    title: "Riny Chappin-Plieger",
    text: "Rogers moeder en de persoonlijke oorsprong van zijn belofte aan de berg.",
  },
  {
    title: "Arianne Heuts-Veenhof",
    text: "Een naam die binnen de herinneringscontext van de campagne expliciet wordt meegenomen.",
  },
  {
    title: "Veteranen en geuniformeerde professionals",
    text: "Mensen uit deze kring die door kanker zijn geraakt, krijgen binnen de actie een respectvolle plek.",
  },
  {
    title: "Chroom-6-context",
    text: "De campagne benoemt ook mensen die geraakt zijn door chroom-6-gerelateerde kankerproblematiek, voor zover bevestigd in de projectbronnen.",
  },
];

export function RemembrancePeopleBlock() {
  return (
    <section className="bg-white">
      <SectionContainer as="div" className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Wie hij zichtbaar wil herdenken
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            De actie blijft persoonlijk, maar is niet alleen persoonlijk.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Roger loopt vanuit zijn eigen belofte, maar de herinneringsactie
            geeft ook ruimte aan anderen die worden gemist of door kanker zijn
            geraakt.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {peopleGroups.map((group) => (
            <article
              className="rounded-lg border border-campaign-border bg-campaign-background p-6"
              key={group.title}
            >
              <h3 className="text-xl font-black text-campaign-navy">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-campaign-muted">
                {group.text}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
