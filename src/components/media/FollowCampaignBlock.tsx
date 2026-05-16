import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type FollowCampaignBlockProps = {
  facebookHref?: string | null;
};

export function FollowCampaignBlock({ facebookHref }: FollowCampaignBlockProps) {
  return (
    <section className="bg-campaign-background">
      <SectionContainer className="py-14 sm:py-16">
        <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-shell sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
              Blijf betrokken
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              Volgen en delen houdt de campagne zichtbaar.
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              Wie Rogers updates volgt of deelt, helpt de campagne verder
              zichtbaar te worden. De belangrijkste vaste steunroute blijft de
              donatie- en steunpagina.
            </p>
          </div>
          <div className="mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <Button className="w-full sm:w-auto lg:w-full" href="/doneren">
              Steun Roger
            </Button>
            <Button
              className="w-full sm:w-auto lg:w-full"
              href="/mijn-verhaal"
              variant="outline"
            >
              Lees het verhaal
            </Button>
            {facebookHref ? (
              <Button
                className="w-full sm:w-auto lg:w-full"
                href={facebookHref}
                rel="noopener noreferrer"
                target="_blank"
                variant="secondary"
              >
                Volg op Facebook
              </Button>
            ) : null}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
