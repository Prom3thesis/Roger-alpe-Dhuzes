import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type OfficialDonationBlockProps = {
  donationUrl: string;
};

export function OfficialDonationBlock({
  donationUrl,
}: OfficialDonationBlockProps) {
  return (
    <section className="bg-white">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:items-center">
        <div className="rounded-lg border border-campaign-gold/70 bg-campaign-navy p-6 text-white shadow-[0_22px_80px_rgb(246_182_66_/_0.18)] ring-1 ring-campaign-gold/20 sm:p-8">
          <p className="inline-flex rounded-full border border-campaign-gold/40 bg-campaign-gold/15 px-3 py-1 text-xs font-black uppercase tracking-normal text-campaign-gold">
            Hoofdroute
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            Direct online doneren
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/75">
            De snelste steunroute blijft bewust visueel dominant.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            <p>
              Directe donaties lopen via Rogers offici&euml;le Alpe
              d&apos;HuZes-actiepagina. Daar komt je bijdrage rechtstreeks bij
              zijn fundraisingdoel terecht.
            </p>
            <p>
              Dit is de snelste en meest directe manier om Roger te steunen in
              zijn weg naar Alpe d&apos;HuZes.
            </p>
          </div>
          <Button
            className="mt-7"
            href={donationUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant="secondary"
          >
            Doneer via de offici&euml;le actiepagina
          </Button>
          <p className="mt-4 text-sm leading-6 text-campaign-muted">
            Je doneert via de offici&euml;le omgeving van Alpe d&apos;HuZes.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
