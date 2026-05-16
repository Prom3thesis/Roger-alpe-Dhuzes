import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function CollaborationBlock() {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-blue">
            Samenwerken of steunen
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Ook nieuwe steun uit de regio is welkom.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Ondernemers, organisaties of betrokken supporters die Rogers
            campagne willen helpen, kunnen via dezelfde contactroute afstemmen
            wat passend is. Dat kan praktisch, zichtbaar of ondersteunend zijn.
          </p>
        </div>

        <div className="rounded-lg border border-campaign-border bg-campaign-background p-6 sm:p-8">
          <h3 className="text-2xl font-black leading-tight text-campaign-navy">
            Bespreek steun of samenwerking
          </h3>
          <p className="mt-4 text-sm leading-6 text-campaign-muted">
            Er is geen apart formulier nodig in deze fase. De pagina houdt de
            contactroute bewust persoonlijk en overzichtelijk.
          </p>
          <Button className="mt-6" href="#contact-roger" variant="secondary">
            Naar contact
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
