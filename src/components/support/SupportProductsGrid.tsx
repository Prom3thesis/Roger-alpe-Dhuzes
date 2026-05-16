import Image from "next/image";

import type { SupportProduct } from "@/data/support-products";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

type SupportProductsGridProps = {
  products: SupportProduct[];
};

const supportPracticalInfo = [
  {
    title: "Bestellen",
    text: "Bestellen kan via WhatsApp, bellen, e-mail of Facebook.",
  },
  {
    title: "Betalen",
    text: "Na bestelling regelt Roger betaling via Tikkie / betaalverzoek, cash bij aflevering of pinnen bij aflevering.",
  },
  {
    title: "Verzenden",
    text: "Verzendkosten zijn voor de besteller.",
  },
];

export function SupportProductsGrid({ products }: SupportProductsGridProps) {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.68fr_1fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              Steunproducten
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              Tastbare manieren om Roger te steunen en tegelijk rechtstreeks bij
              te dragen aan zijn Alpe d&apos;HuZes-donaties.
            </p>
          </div>
          <div className="rounded-lg border border-campaign-border bg-campaign-background p-5">
            <p className="text-sm font-bold leading-6 text-campaign-muted">
              De steunproducten worden getoond met de actuele productfoto&apos;s.
              Bestellen verloopt persoonlijk via de contactkanalen van Roger,
              zonder webshop of checkout.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              className="flex h-full flex-col overflow-hidden rounded-lg border border-campaign-border bg-campaign-background"
              key={product.id}
            >
              {product.image ? (
                <div className="border-b border-campaign-border bg-white p-5">
                  <Image
                    alt={product.imageAlt ?? ""}
                    className="aspect-[4/3] w-full object-contain"
                    height={600}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    src={product.image}
                    width={600}
                  />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="rounded-full bg-campaign-red px-3 py-1 text-xs font-black text-white">
                    Route {index + 2}
                  </p>
                  <p className="text-2xl font-black leading-none text-campaign-navy">
                    {product.priceLabel}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-campaign-navy">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-campaign-muted">
                  {product.description}
                </p>
                <p className="mt-5 rounded-md border border-campaign-border bg-white p-4 text-sm font-bold leading-6 text-campaign-navy">
                  {product.proceedsNote}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {supportPracticalInfo.map((item) => (
            <article
              className="rounded-lg border border-campaign-border bg-white p-5"
              key={item.title}
            >
              <h3 className="text-lg font-black text-campaign-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-campaign-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/sponsors-contact" variant="secondary">
            Neem contact op over steunproducten
          </Button>
          <p className="text-sm leading-6 text-campaign-muted">
            De concrete contactgegevens worden verder uitgewerkt op Sponsors &
            Contact; er worden hier geen losse contactgegevens verzonnen.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
