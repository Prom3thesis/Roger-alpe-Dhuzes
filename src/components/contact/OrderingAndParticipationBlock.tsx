import Link from "next/link";

import type { RemembranceAction } from "@/data/remembrance-actions";
import type { SiteContact, SiteSocialLinks } from "@/data/site";
import type { SupportProduct } from "@/data/support-products";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { getContactRoutes } from "@/lib/contact/contact-routes";

type OrderingAndParticipationBlockProps = {
  channels: readonly string[];
  contact: SiteContact;
  paymentMethods: readonly string[];
  products: SupportProduct[];
  remembranceActions: RemembranceAction[];
  shippingNote: string;
  social: SiteSocialLinks;
};

export function OrderingAndParticipationBlock({
  channels,
  contact,
  paymentMethods,
  products,
  remembranceActions,
  shippingNote,
  social,
}: OrderingAndParticipationBlockProps) {
  const jacketAction = remembranceActions.find(
    (action) => action.kind === "jacket",
  );
  const contactRoutes = getContactRoutes(contact, social);

  return (
    <section className="bg-campaign-background" id="bestellen-deelnemen">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
              Bestellen en deelnemen
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              Geen webshop, wel een duidelijke persoonlijke route.
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              Steunproducten, herinneringsvormen en de jasjeactie worden niet
              via een checkout verkocht. Roger regelt bestelling, deelname en
              betaling persoonlijk na contact.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/doneren" variant="secondary">
                Bekijk steunproducten
              </Button>
              <Button href="/herinneringsactie" variant="outline">
                Bekijk herinneringsactie
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <InfoCard
              items={channels}
              links={contactRoutes}
              title="Bestellen of deelnemen via"
            />
            <InfoCard items={paymentMethods} title="Betaling na contact via" />
            <div className="rounded-lg border border-campaign-gold/30 bg-white p-5 shadow-[0_18px_48px_rgb(6_25_47_/_0.08)]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-campaign-red">
                Praktisch
              </p>
              <h3 className="mt-2 text-lg font-black text-campaign-navy">
                Verzendkosten
              </h3>
              <p className="mt-3 text-sm font-bold leading-6 text-campaign-muted">
                {shippingNote}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <RouteSummaryCard
            ctaHref="/doneren"
            ctaLabel="Naar steunproducten"
            items={products.map((product) => ({
              label: product.name,
              value: product.priceLabel,
            }))}
            title="Steunproducten"
          />
          <RouteSummaryCard
            ctaHref="/herinneringsactie"
            ctaLabel="Naar herinneringsactie"
            items={remembranceActions
              .filter((action) => action.kind === "object")
              .map((action) => ({
                label: action.name,
                value: action.priceLabel,
              }))}
            title="Herinneringsvormen"
          />
          <article className="rounded-lg border border-campaign-border bg-campaign-navy p-6 text-white">
            <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
              Jasjeactie
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight">
              {jacketAction?.name ?? "Schrijven op Rogers Alpe d'HuZes-jasje"}
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/75">
              {jacketAction?.description ??
                "Een symbolische herinneringsactie die bij de herinneringsactie hoort."}
            </p>
            {jacketAction ? (
              <p className="mt-5 text-3xl font-black">
                {jacketAction.priceLabel}
              </p>
            ) : null}
            <Link
              className="mt-6 inline-flex text-sm font-black text-campaign-gold underline-offset-4 hover:underline"
              href="/herinneringsactie"
            >
              Bekijk de uitleg
            </Link>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}

function InfoCard({
  items,
  links,
  title,
}: {
  items: readonly string[];
  links?: ReturnType<typeof getContactRoutes>;
  title: string;
}) {
  const hasLinks = Boolean(links && links.length > 0);

  return (
    <div
      className={
        hasLinks
          ? "rounded-lg border border-campaign-blue/45 bg-campaign-navy p-5 text-white shadow-[0_22px_65px_rgb(6_25_47_/_0.16)]"
          : "rounded-lg border border-campaign-gold/35 bg-white p-5 shadow-[0_18px_48px_rgb(6_25_47_/_0.08)]"
      }
    >
      <p
        className={
          hasLinks
            ? "text-xs font-black uppercase tracking-[0.14em] text-campaign-gold"
            : "text-xs font-black uppercase tracking-[0.14em] text-campaign-red"
        }
      >
        {hasLinks ? "Actieroute" : "Trustinformatie"}
      </p>
      <h3
        className={
          hasLinks
            ? "mt-2 text-lg font-black text-white"
            : "mt-2 text-lg font-black text-campaign-navy"
        }
      >
        {title}
      </h3>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links && links.length > 0
          ? links.map((item) => (
              <li key={item.id}>
                <a
                  className="block rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-campaign-gold/70 hover:bg-white/15 hover:shadow-[0_12px_30px_rgb(0_0_0_/_0.16)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-campaign-gold"
                  href={item.href}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))
          : items.map((item) => (
              <li
                className="rounded-md border border-campaign-border bg-campaign-background px-3 py-2 text-sm font-bold text-campaign-navy shadow-[inset_4px_0_0_rgb(246_182_66_/_0.55)]"
                key={item}
              >
                {item}
              </li>
            ))}
      </ul>
    </div>
  );
}

function RouteSummaryCard({
  ctaHref,
  ctaLabel,
  items,
  title,
}: {
  ctaHref: string;
  ctaLabel: string;
  items: Array<{ label: string; value: string }>;
  title: string;
}) {
  return (
    <article className="rounded-lg border border-campaign-border bg-white p-6">
      <h3 className="text-2xl font-black leading-tight text-campaign-navy">
        {title}
      </h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li
            className="flex items-start justify-between gap-4 rounded-md border border-campaign-border bg-campaign-background px-3 py-2"
            key={item.label}
          >
            <span className="text-sm font-bold leading-6 text-campaign-navy">
              {item.label}
            </span>
            <span className="shrink-0 text-sm font-black leading-6 text-campaign-blue">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
      <Link
        className="mt-6 inline-flex text-sm font-black text-campaign-blue underline-offset-4 hover:underline"
        href={ctaHref}
      >
        {ctaLabel}
      </Link>
    </article>
  );
}
