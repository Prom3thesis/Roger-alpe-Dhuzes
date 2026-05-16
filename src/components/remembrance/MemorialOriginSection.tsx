import { SectionContainer } from "@/components/layout/SectionContainer";

export function MemorialOriginSection() {
  return (
    <section className="bg-campaign-background">
      <SectionContainer
        as="div"
        className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.76fr] lg:items-center"
      >
        <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-[0_18px_55px_rgb(6_25_47_/_0.08)] sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Waarom Roger deze actie start
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            De oorsprong ligt bij zijn moeder Riny.
          </h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            <p>
              Rogers deelname aan Alpe d&apos;HuZes komt voort uit de belofte
              aan zijn moeder, Riny Chappin-Plieger. Die persoonlijke oorsprong
              blijft de kern van zijn campagne.
            </p>
            <p>
              De herinneringsactie verdiept die belofte. Niet alleen zijn moeder
              krijgt een zichtbare plek in het verhaal, ook andere mensen die
              door kanker worden gemist kunnen via deze actie worden genoemd.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-campaign-gold/45 bg-campaign-navy p-6 text-white shadow-shell sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Niet commercieel
          </p>
          <p className="mt-3 text-2xl font-black leading-snug">
            Deze actie is eerst een herinnering en pas daarna een steunroute.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Daarom krijgt de actie een eigen pagina, eigen toon en eigen ritme.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
