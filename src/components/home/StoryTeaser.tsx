import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function StoryTeaser() {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.86fr_1fr] lg:items-center">
      <div className="relative overflow-hidden rounded-lg border border-campaign-border bg-white shadow-[0_18px_55px_rgb(6_25_47_/_0.10)]">
        <Image
          alt="Zwart-wit portret van Roger Chappin."
          className="aspect-[4/3] w-full object-cover object-center"
          height={556}
          sizes="(min-width: 1024px) 40vw, 100vw"
          src="/images/hero/roger-portrait-bw.jpg"
          width={730}
        />
      </div>

      <div className="max-w-3xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Van belofte naar berg
        </h2>
        <div className="mt-5 grid gap-4 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Roger keek jarenlang samen met zijn moeder naar Alpe d&apos;HuZes.
            Toen zij ziek werd, beloofde hij dat hij ooit voor haar die berg
            zou lopen als zijn lichaam dat toeliet.
          </p>
          <p>
            Die belofte bleef staan. Nu wordt ze concreet: niet als groot
            gebaar voor de buitenwereld, maar als een persoonlijke tocht die
            steun verdient.
          </p>
        </div>
        <Button className="mt-7" href="/mijn-verhaal" variant="secondary">
          Lees het volledige verhaal
        </Button>
      </div>
    </SectionContainer>
  );
}
