import type { SiteContact, SiteSocialLinks } from "@/data/site";

export type ContactRoute = {
  external?: boolean;
  href: string;
  id: "whatsapp" | "phone" | "email" | "facebook";
  label: string;
  value: string;
};

export function getContactRoutes(
  contact: SiteContact,
  social: SiteSocialLinks,
) {
  const routes: ContactRoute[] = [];

  if (contact.whatsappHref) {
    routes.push({
      external: true,
      href: contact.whatsappHref,
      id: "whatsapp",
      label: "WhatsApp Roger",
      value: "Stuur een WhatsApp-bericht",
    });
  }

  if (contact.phoneHref && contact.phoneDisplay) {
    routes.push({
      href: contact.phoneHref,
      id: "phone",
      label: "Bel Roger",
      value: contact.phoneDisplay,
    });
  }

  if (contact.email) {
    routes.push({
      href: `mailto:${contact.email}`,
      id: "email",
      label: "E-mail Roger",
      value: contact.email,
    });
  }

  if (social.facebookGroup) {
    routes.push({
      external: true,
      href: social.facebookGroup,
      id: "facebook",
      label: "Facebookgroep bekijken",
      value: social.facebookGroupLabel ?? "Facebookgroep",
    });
  }

  return routes;
}
