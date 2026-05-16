import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function HomeFinalCTA() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 text-center sm:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
          Rogers belofte wordt werkelijkheid. Help hem richting de top.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Iedere steunactie brengt zijn Alpe d&apos;HuZes-deelname dichterbij:
          direct doneren, steunproducten bekijken of de herinneringsactie
          ontdekken.
        </p>
        <Button className="mt-8" href="/doneren" variant="primary">
          Steun Rogers belofte
        </Button>
      </SectionContainer>
    </section>
  );
}
