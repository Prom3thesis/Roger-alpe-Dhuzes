export type RemembranceActionKind = "object" | "jacket";

export type RemembranceAction = {
  id: string;
  name: string;
  priceAmount: number;
  priceLabel: string;
  description: string;
  kind: RemembranceActionKind;
  proceedsNote: string;
};

export const remembranceActionProceedsNote =
  "De volledige opbrengst van deze herinneringsacties gaat naar Rogers Alpe d'HuZes-donaties.";

export const remembranceActions = [
  {
    id: "kaarshouder-vleugels",
    name: "Kaarshouder / vleugels",
    priceAmount: 25,
    priceLabel: "\u20ac25,00",
    description:
      "Een tastbaar herinneringsobject met persoonlijke herdenkingswaarde.",
    kind: "object",
    proceedsNote: remembranceActionProceedsNote,
  },
  {
    id: "engel",
    name: "Engel",
    priceAmount: 35,
    priceLabel: "\u20ac35,00",
    description:
      "Een tweede waardige herinneringsvariant om iemand zichtbaar mee te dragen.",
    kind: "object",
    proceedsNote: remembranceActionProceedsNote,
  },
  {
    id: "jasjeactie",
    name: "Schrijven op Rogers Alpe d'HuZes-jasje",
    priceAmount: 10,
    priceLabel: "\u20ac10,00",
    description:
      "Een symbolische actie waarbij het jasje daarna als herdenking blijft ophangen.",
    kind: "jacket",
    proceedsNote: remembranceActionProceedsNote,
  },
] satisfies RemembranceAction[];

export const remembranceParticipation = {
  channels: ["WhatsApp", "bellen", "e-mail", "Facebook"],
  paymentMethods: [
    "Tikkie / betaalverzoek",
    "cash bij aflevering",
    "pinnen bij aflevering",
  ],
  shippingNote: "Verzendkosten zijn voor de besteller.",
} as const;
