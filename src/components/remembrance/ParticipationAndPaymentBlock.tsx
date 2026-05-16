import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import type { SiteContact } from "@/data/site";

type ParticipationAndPaymentBlockProps = {
  contact: SiteContact;
  channels: readonly string[];
  paymentMethods: readonly string[];
  shippingNote: string;
};

export function ParticipationAndPaymentBlock({
  contact,
  channels,
  paymentMethods,
  shippingNote,
}: ParticipationAndPaymentBlockProps) {
  const hasDirectContact = Boolean(contact.email || contact.phone);

  return (
    <section className="bg-campaign-background" id="meedoen">
      <SectionContainer
        as="div"
        className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:items-start"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Bestellen, betalen en verzenden
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Meedoen loopt via persoonlijk contact.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Er is geen webshop, checkout of ingebouwde betaalstap. Roger regelt
            deelname en betaling persoonlijk na contact.
          </p>
          <Button className="mt-7" href="/sponsors-contact" variant="secondary">
            Neem contact op
          </Button>
          {!hasDirectContact ? (
            <p className="mt-4 text-sm leading-6 text-campaign-muted">
              De concrete contactgegevens worden centraal uitgewerkt op Sponsors
              & Contact; hier worden geen gegevens verzonnen.
            </p>
          ) : null}
        </div>

        <div className="grid gap-4">
          <InfoCard items={channels} title="Meedoen of bestellen via" />
          <InfoCard items={paymentMethods} title="Betaling na contact via" />
          <div className="rounded-lg border border-campaign-border bg-white p-5">
            <h3 className="text-lg font-black text-campaign-navy">
              Verzendkosten
            </h3>
            <p className="mt-3 text-sm font-bold leading-6 text-campaign-muted">
              {shippingNote}
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function InfoCard({
  items,
  title,
}: {
  items: readonly string[];
  title: string;
}) {
  return (
    <div className="rounded-lg border border-campaign-border bg-white p-5">
      <h3 className="text-lg font-black text-campaign-navy">{title}</h3>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            className="rounded-md border border-campaign-border bg-campaign-background px-3 py-2 text-sm font-bold text-campaign-navy"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
