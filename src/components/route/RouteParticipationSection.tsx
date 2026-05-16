import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function RouteParticipationSection() {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Wat Roger gaat doen
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Hij neemt deel aan Alpe d&apos;HuZes en werkt toe naar de wandelroute
            op de berg.
          </h2>
        </div>

        <div className="rounded-lg border border-campaign-border bg-campaign-background p-6">
          <p className="text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Rogers tocht is verbonden aan de wandel- en loperscontext van
            Alpe d&apos;HuZes. Voor hem is dat het moment waarop een jarenoude
            belofte aan zijn moeder niet alleen verteld, maar ook uitgevoerd
            wordt.
          </p>
          <Button className="mt-7" href="/mijn-verhaal" variant="outline">
            Lees waarom Roger dit doet
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
