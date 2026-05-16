import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function MediaUpdatesHero() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div className="max-w-3xl min-w-0">
          <h1 className="max-w-[12ch] break-words text-4xl font-black leading-tight tracking-normal sm:max-w-none sm:text-6xl lg:text-7xl">
            Media, updates en momenten onderweg naar de berg
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
            Roger deelt zijn voorbereiding, steunacties en campagnemomenten.
            Hier staan de belangrijkste updates bij elkaar, van training tot
            RTV Parkstad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap"
              href="/doneren"
            >
              Steun de campagne
            </Button>
            <Button
              className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15 sm:w-auto sm:whitespace-nowrap"
              href="/de-tocht"
              variant="outline"
            >
              Bekijk de tocht
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-shell sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Campagne in beweging
          </p>
          <div className="mt-5 space-y-4">
            {["Training", "Herinnering", "Media-aandacht"].map((item) => (
              <div
                className="rounded-lg border border-white/15 bg-white/10 p-4"
                key={item}
              >
                <p className="text-xl font-black leading-tight">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-white/72">
            De updates maken zichtbaar hoe de belofte stap voor stap richting
            Alpe d&apos;HuZes wordt gebracht.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
