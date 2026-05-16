import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function StoryFinalCTA() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 text-center sm:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
          Deze tocht begon als een belofte. Nu wordt hij werkelijkheid.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Door Roger te steunen, help je zijn Alpe d&apos;HuZes-deelname dragen
          en geef je kracht aan het verhaal dat hem naar de berg brengt.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
      </SectionContainer>
    </section>
  );
}
