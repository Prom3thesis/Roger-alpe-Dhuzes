import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function StoryPageHero() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="grid gap-9 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
            Mijn verhaal
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Achter Rogers deelname aan Alpe d&apos;HuZes zit een belofte die
            jaren eerder ontstond. Deze tocht is persoonlijk voordat hij
            sportief is: een belofte aan zijn moeder die nu werkelijkheid kan
            worden.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto" href="/doneren">
              Steun Rogers belofte
            </Button>
            <Button
              className="w-full border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 sm:w-auto"
              href="/de-tocht"
              variant="outline"
            >
              Bekijk de tocht
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-[0_26px_90px_rgb(0_0_0_/_0.32)]">
            <Image
              alt="Portret van Roger Chappin voor zijn persoonlijke verhaal rond Alpe d'HuZes."
              className="aspect-[5/4] w-full object-cover object-center"
              height={556}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/hero/roger-portrait-bw.jpg"
              width={730}
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
