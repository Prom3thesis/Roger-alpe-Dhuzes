import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type CampaignHeroProps = {
  donationUrl: string;
};

export function CampaignHero({ donationUrl }: CampaignHeroProps) {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:py-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.03] tracking-normal sm:text-5xl lg:text-5xl 2xl:text-6xl">
            Een belofte aan mijn moeder. Een berg die ik nu ga beklimmen.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Roger Chappin loopt Alpe d&apos;HuZes na een enorme fysieke
            transformatie. Voor zijn moeder, voor iedereen die met kanker te
            maken krijgt, en met een helder doel: steun ophalen voor zijn
            offici&euml;le actiepagina.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              href={donationUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Doneer nu
            </Button>
            <Button
              className="w-full border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 sm:w-auto"
              href="/mijn-verhaal"
              variant="outline"
            >
              Lees mijn verhaal
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-[0_26px_90px_rgb(0_0_0_/_0.32)]">
            <Image
              alt="Portret van Roger Chappin voor zijn Alpe d'HuZes-campagne."
              className="max-h-[30rem] w-full object-cover object-center sm:aspect-[5/4]"
              height={1094}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              src="/images/hero/roger-portrait-color.png"
              width={1437}
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-lg border border-white/20 bg-campaign-navy/90 p-3 shadow-shell backdrop-blur">
              <Image
                alt=""
                aria-hidden="true"
                className="size-12 rounded-md object-cover"
                height={800}
                src="/images/brand/roger-campaign-logo.jpg"
                width={800}
              />
              <p className="max-w-40 text-sm font-black leading-tight text-white">
                Roger Chappin naar Alpe d&apos;HuZes
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
