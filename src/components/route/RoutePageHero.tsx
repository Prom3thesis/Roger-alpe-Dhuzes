import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

const heroNotes = [
  "Belofte",
  "Training",
  "Route",
  "Berg",
] as const;

export function RoutePageHero() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="grid gap-9 py-12 sm:py-16 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <div className="max-w-3xl min-w-0">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            De tocht
          </p>
          <h1 className="mt-4 max-w-[13ch] break-words text-4xl font-black leading-tight tracking-normal sm:max-w-none sm:text-6xl lg:text-7xl">
            De tocht naar boven begint lang voor de start
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
            Voor Roger is Alpe d&apos;HuZes geen abstract eindpunt. De berg is
            de plek waar zijn belofte fysiek wordt: trainen, opbouwen,
            volhouden en straks die klim aangaan.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap"
              href="/doneren"
            >
              Help Roger naar de top
            </Button>
            <Button
              className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15 sm:w-auto sm:whitespace-nowrap"
              href="/mijn-verhaal"
              variant="outline"
            >
              Lees mijn verhaal
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-shell sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Van belofte naar berg
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {heroNotes.map((note) => (
              <div
                className="rounded-lg border border-white/15 bg-white/10 p-4"
                key={note}
              >
                <p className="text-xl font-black leading-tight">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-white/72">
            Deze pagina laat de fysieke kant zien: de route, de voorbereiding
            en de realiteit van trainen richting 4 juni 2026.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
