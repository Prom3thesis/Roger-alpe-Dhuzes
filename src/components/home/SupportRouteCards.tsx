import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { supportProducts } from "@/data/support-products";

type SupportRouteCardsProps = {
  donationUrl: string;
};

export function SupportRouteCards({ donationUrl }: SupportRouteCardsProps) {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            Drie manieren om te steunen
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Direct doneren blijft de hoofdroute. Daarnaast zijn er tastbare
            steunproducten en een waardige herinneringsactie.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="rounded-lg border border-campaign-gold/70 bg-campaign-blue/25 p-6 shadow-[0_22px_80px_rgb(246_182_66_/_0.18)] ring-1 ring-campaign-gold/20">
            <p className="mb-4 inline-flex rounded-full border border-campaign-gold/40 bg-campaign-gold/15 px-3 py-1 text-xs font-black uppercase tracking-normal text-campaign-gold">
              Hoofdroute
            </p>
            <h3 className="text-2xl font-black leading-tight">
              Doneer direct
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/78">
              Help Roger via zijn offici&euml;le Alpe d&apos;HuZes-actiepagina
              richting het donatiedoel van &euro; 2.500.
            </p>
            <Button
              className="mt-6 w-full"
              href={donationUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Doneer nu
            </Button>
          </article>

          <article className="rounded-lg border border-white/15 bg-white/10 p-6">
            <h3 className="text-2xl font-black leading-tight">
              Steun met campagneproducten
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Armbandjes en bidons zijn tastbare manieren om Roger zichtbaar te
              steunen. De volledige opbrengst gaat naar zijn Alpe
              d&apos;HuZes-donaties.
            </p>
            <ul className="mt-4 grid gap-2 text-sm font-semibold text-white/80">
              {supportProducts.map((product) => (
                <li key={product.id}>
                  {product.name} - {product.priceLabel}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full" href="/doneren" variant="primary">
              Ontdek de steunproducten
            </Button>
          </article>

          <article className="rounded-lg border border-white/15 bg-white/10 p-6">
            <h3 className="text-2xl font-black leading-tight">
              Doe mee aan de herinneringsactie
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Via een kaarshouder met kaars en naam krijgt herinnering tastbare
              vorm. Deze route verdient een rustige eigen plek binnen de
              campagne.
            </p>
            <Button
              className="mt-6 w-full"
              href="/herinneringsactie"
              variant="primary"
            >
              Bekijk de herinneringsactie
            </Button>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}
