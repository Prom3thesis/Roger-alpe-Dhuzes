import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type SupportFinalCTAProps = {
  donationUrl: string;
};

export function SupportFinalCTA({ donationUrl }: SupportFinalCTAProps) {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 text-center sm:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
          Iedere vorm van steun brengt Rogers belofte dichterbij.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Roger werkt toe naar Alpe d&apos;HuZes. Direct doneren blijft de
          duidelijkste manier om hem nu te helpen.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="w-full sm:w-auto"
            href={donationUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Doneer direct
          </Button>
          <Button
            className="w-full border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 sm:w-auto"
            href="/mijn-verhaal"
            variant="outline"
          >
            Lees mijn verhaal
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
