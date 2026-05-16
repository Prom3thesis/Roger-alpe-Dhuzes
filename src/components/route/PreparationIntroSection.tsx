import { SectionContainer } from "@/components/layout/SectionContainer";

const preparationItems = [
  {
    title: "Sportschool",
    text: "De voorbereiding is zichtbaar in training en opbouw, niet alleen in de uiteindelijke dag op de berg.",
  },
  {
    title: "Loopband en helling",
    text: "Treadmilltraining helpt om conditie, helling en volhouden gericht mee te nemen in de voorbereiding.",
  },
  {
    title: "Buiten trainen",
    text: "Ook buitenmomenten, waaronder een bevestigde offroad trainingsupdate van 7,47 km, horen bij de opbouw.",
  },
];

export function PreparationIntroSection() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Voorbereiding
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            De voorbereiding begon ruim voor de berg.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            De beklimming vraagt meer dan goede wil. Roger bouwt toe naar een
            fysieke opgave waarin trainen, geduld en herhaling onderdeel zijn
            van het nakomen van zijn belofte.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {preparationItems.map((item) => (
            <article
              className="rounded-lg border border-white/15 bg-white/10 p-5"
              key={item.title}
            >
              <h3 className="text-xl font-black leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/72">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
