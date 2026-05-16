import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

const contactChannels = ["WhatsApp", "bellen", "e-mail", "Facebook"];

export function ShareAndContactBlock() {
  return (
    <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
          Delen en contact
        </h2>
        <div className="mt-5 space-y-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
          <p>
            Niet iedereen doneert meteen. Delen helpt de campagne zichtbaar te
            maken bij mensen die Roger, Alpe d&apos;HuZes of de regio willen
            steunen.
          </p>
          <p>
            Vragen over steunproducten, acties of regionale steun krijgen later
            een duidelijke plek op Sponsors & Contact.
          </p>
          <p>
            Bestellen of meedoen verloopt via persoonlijk contact: WhatsApp,
            bellen, e-mail of Facebook. Na contact regelt Roger de betaling via
            Tikkie / betaalverzoek, cash of pin bij aflevering.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-campaign-gold/40 bg-campaign-navy p-6 text-white shadow-[0_24px_70px_rgb(6_25_47_/_0.18)] sm:p-8">
        <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
          Vervolgstap
        </p>
        <p className="mt-3 text-2xl font-black leading-snug">
          Neem contact op als je wilt helpen met producten, acties of regionale
          steun.
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2">
          {contactChannels.map((channel) => (
            <li
              className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
              key={channel}
            >
              {channel}
            </li>
          ))}
        </ul>
        <Button className="mt-6" href="/sponsors-contact" variant="secondary">
          Neem contact op
        </Button>
      </div>
    </SectionContainer>
  );
}
