import { officialDonationUrl } from "@/data/site";

export type FundraisingCurrency = "EUR";
export type FundraisingSource = "manual" | "remote";

export type FundraisingConfig = {
  goalAmount: number;
  currency: FundraisingCurrency;
  donationUrl: string;
  manualRaisedAmount: number | null;
  manualRaisedAmountUpdatedAt: string | null;
  source: FundraisingSource;
};

export const fundraisingConfig = {
  goalAmount: 2500,
  currency: "EUR",
  donationUrl: officialDonationUrl,
  manualRaisedAmount: null,
  manualRaisedAmountUpdatedAt: null,
  source: "manual",
} satisfies FundraisingConfig;
