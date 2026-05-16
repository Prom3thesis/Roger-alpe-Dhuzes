export type SupportProduct = {
  id: string;
  name: string;
  priceAmount: number;
  priceLabel: string;
  description: string;
  proceedsNote: string;
  image?: string;
  imageAlt?: string;
  orderCtaLabel: string;
  orderHref?: string;
  featured?: boolean;
};

export const supportProductProceedsNote =
  "De volledige opbrengst gaat naar Rogers Alpe d'HuZes-donaties.";

export const supportProducts = [
  {
    id: "armbandje-roger-logo",
    name: "Armbandje met Roger-logo",
    priceAmount: 2,
    priceLabel: "\u20ac2,00",
    description:
      "Een laagdrempelige tastbare manier om Rogers campagne zichtbaar te steunen.",
    proceedsNote: supportProductProceedsNote,
    image: "/images/products/product-armband-roger-logo.png",
    imageAlt:
      "Armbandje met Roger-logo als steunproduct voor Rogers Alpe d'HuZes-campagne.",
    orderCtaLabel: "Vraag een steunproduct aan",
  },
  {
    id: "plastic-bidon-roger-logo",
    name: "Plastic bidon met Roger-logo",
    priceAmount: 2.5,
    priceLabel: "\u20ac2,50",
    description:
      "Een praktische bidon waarmee je direct bijdraagt aan Rogers Alpe d'HuZes-donaties.",
    proceedsNote: supportProductProceedsNote,
    image: "/images/products/product-plastic-bidon-roger-logo.png",
    imageAlt:
      "Plastic bidon met Roger-logo als steunproduct voor Rogers Alpe d'HuZes-campagne.",
    orderCtaLabel: "Vraag een steunproduct aan",
  },
  {
    id: "aluminium-bidon-roger-logo",
    name: "Aluminium bidon met Roger-logo",
    priceAmount: 3.5,
    priceLabel: "\u20ac3,50",
    description:
      "Een stevige bidon als tastbare steun voor Rogers deelname aan Alpe d'HuZes.",
    proceedsNote: supportProductProceedsNote,
    image: "/images/products/product-aluminium-bidon-roger-logo.png",
    imageAlt:
      "Aluminium bidon met Roger-logo als steunproduct voor Rogers Alpe d'HuZes-campagne.",
    orderCtaLabel: "Vraag een steunproduct aan",
  },
] satisfies SupportProduct[];
