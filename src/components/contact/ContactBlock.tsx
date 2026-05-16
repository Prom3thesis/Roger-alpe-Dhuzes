import type { SiteContact, SiteSocialLinks } from "@/data/site";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { getContactRoutes } from "@/lib/contact/contact-routes";

const contactChannels = ["WhatsApp", "bellen", "e-mail", "Facebook"];

type ContactBlockProps = {
  contact: SiteContact;
  social: SiteSocialLinks;
};

export function ContactBlock({ contact, social }: ContactBlockProps) {
  const contactItems = getContactRoutes(contact, social);
  const hasDirectContact = contactItems.length > 0;

  return (
    <section className="bg-white" id="contact-roger">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.68fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-blue">
            Contact met Roger
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Vragen, bestellingen en steun lopen via persoonlijk contact.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            Deze pagina bundelt de praktische contactroute voor sponsors,
            steunproducten, herinneringsacties en samenwerkingen rond Rogers
            campagne.
          </p>
        </div>

        <div className="rounded-lg border border-campaign-gold/35 bg-campaign-navy p-6 text-white shadow-[0_24px_70px_rgb(6_25_47_/_0.18)] sm:p-8">
          {hasDirectContact ? (
            <>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-campaign-gold">
                Snelste route
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                Direct contact
              </h3>
              <div className="mt-5 grid gap-3">
                {contactItems.map((item) => (
                  <a
                    className="group rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-campaign-gold/70 hover:bg-white/15 hover:shadow-[0_14px_35px_rgb(0_0_0_/_0.18)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-campaign-gold"
                    href={item.href}
                    key={item.label}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    target={item.external ? "_blank" : undefined}
                  >
                    <span className="block text-xs uppercase tracking-normal text-campaign-gold">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-white group-hover:text-white">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-black leading-tight">
                Contactkanalen
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/78">
                De concrete contactgegevens zijn nog niet betrouwbaar ingevuld
                in de siteconfiguratie. Daarom tonen we hier geen verzonnen
                telefoonnummer, e-mailadres of dode link.
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
              <p className="mt-5 text-sm font-bold leading-6 text-campaign-gold">
                Deze pagina blijft de centrale plek voor contact rond
                bestellingen, deelnamevragen en sponsorsteun.
              </p>
            </>
          )}
        </div>
      </SectionContainer>
    </section>
  );
}
