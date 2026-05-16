export type Sponsor = {
  id: string;
  name: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  description?: string;
  featured?: boolean;
};

export const sponsors = [
  {
    id: "car-detailing-kissel",
    name: "Car Detailing Kissel",
    image: "/images/sponsors/sponsor-car-detailing-kissel.jpg",
    imageAlt:
      "Sponsorvisual van Car Detailing Kissel voor Rogers Alpe d'HuZes-campagne.",
  },
  {
    id: "hormati-gym",
    name: "Hormati Gym",
    image: "/images/sponsors/sponsor-hormati-gym.jpg",
    imageAlt:
      "Sponsorvisual van Hormati Gym voor Rogers Alpe d'HuZes-campagne.",
  },
  {
    id: "goc-parkstad",
    name: "G.O.C. Parkstad",
    image: "/images/sponsors/sponsor-goc-parkstad.jpg",
    imageAlt:
      "Sponsorvisual van G.O.C. Parkstad voor Rogers Alpe d'HuZes-campagne.",
  },
  {
    id: "vog-parkstad",
    name: "Stichting Veteranen Ondersteunings Groep Parkstad / V.O.G.",
    image: "/images/sponsors/sponsor-vog-parkstad.jpg",
    imageAlt:
      "Sponsorvisual van Stichting Veteranen Ondersteunings Groep Parkstad / V.O.G. voor Rogers Alpe d'HuZes-campagne.",
  },
  {
    id: "ff-frietje-mobile-catering",
    name: "FF Frietje / Mobile Catering",
    image: "/images/sponsors/sponsor-ff-frietje.jpg",
    imageAlt:
      "Sponsorvisual van FF Frietje / Mobile Catering voor Rogers Alpe d'HuZes-campagne.",
  },
] satisfies Sponsor[];
