export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Mijn verhaal", href: "/mijn-verhaal" },
  { label: "De tocht", href: "/de-tocht" },
  { label: "Herinneringsactie", href: "/herinneringsactie" },
  { label: "Media & Updates", href: "/media-updates" },
  { label: "Sponsors & Contact", href: "/sponsors-contact" },
] satisfies NavigationItem[];

export const primaryNavigationCta = {
  label: "Doneer / Steun",
  href: "/doneren",
} satisfies NavigationItem;
