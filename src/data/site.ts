export const officialDonationUrl =
  "https://inschrijving.opgevenisgeenoptie.nl/fundraisers/rogerchappin36831";

export type SiteContact = {
  email: string | null;
  phone: string | null;
  phoneDisplay: string | null;
  phoneHref: string | null;
  whatsappHref: string | null;
};

export type SiteSocialLinks = {
  facebookGroup: string | null;
  facebookGroupLabel: string | null;
};

export type SiteConfig = {
  name: string;
  title: string;
  label: string;
  description: string;
  url: string;
  internalSupportHref: string;
  donationUrl: string;
  contact: SiteContact;
  social: SiteSocialLinks;
};

export const siteConfig = {
  name: "roger-alpe-dhuzes.nl",
  title: "Roger Chappin - Alpe d'HuZes",
  label: "Campagnesite in opbouw",
  description:
    "Campagnesite voor Roger Chappin en zijn deelname aan Alpe d'HuZes.",
  url: "https://roger-alpe-dhuzes.nl",
  internalSupportHref: "/doneren",
  donationUrl: officialDonationUrl,
  contact: {
    email: "info@goc-parkstad.nl",
    phone: "0685002627",
    phoneDisplay: "06 8500 2627",
    phoneHref: "tel:+31685002627",
    whatsappHref: "https://wa.me/31685002627",
  },
  social: {
    facebookGroup: "https://www.facebook.com/groups/1365430658620847/",
    facebookGroupLabel: "Roger's weg naar Alpe d'Huzes",
  },
} as const satisfies SiteConfig;
