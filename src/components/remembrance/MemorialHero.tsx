import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function MemorialHero() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer
        as="div"
        className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div className="max-w-3xl min-w-0">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Herinneren en steunen
          </p>
          <h1 className="mt-4 text-[2.75rem] font-black leading-[0.98] tracking-normal sm:text-6xl sm:leading-tight lg:text-7xl">
            <span className="block md:inline lg:block">Herinnerings</span>
            <span className="block md:inline lg:block">actie</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
            Een naam zichtbaar meenemen, een licht laten branden voor wie gemist
            wordt en tegelijk Rogers Alpe d&apos;HuZes-missie steunen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap"
              href="#meedoen"
            >
              Doe mee aan de herinneringsactie
            </Button>
            <Button
              className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15 sm:w-auto sm:whitespace-nowrap"
              href="/doneren"
              variant="outline"
            >
              Doneer aanvullend
            </Button>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-[0_24px_80px_rgb(0_0_0_/_0.24)]">
          <Image
            alt="Engelen en kaarshouders met namen als onderdeel van Rogers herinneringsactie."
            className="aspect-[4/3] w-full object-cover object-center"
            height={1448}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="/images/remembrance/remembrance-angels-tealights.png"
            width={1086}
          />
        </div>
      </SectionContainer>
    </section>
  );
}
