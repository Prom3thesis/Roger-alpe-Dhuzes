import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function MediaUpdatesFinalCTA() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 text-center sm:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
          Rogers campagne is zichtbaar in beweging.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Elke update brengt de berg dichterbij. Steun helpt Roger om zijn
          belofte kracht bij te zetten richting Alpe d&apos;HuZes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap"
            href="/doneren"
          >
            Doneer nu
          </Button>
          <Button
            className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15 sm:w-auto sm:whitespace-nowrap"
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
