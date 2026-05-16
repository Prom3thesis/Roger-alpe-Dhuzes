import {
  fundraisingConfig,
  type FundraisingConfig,
  type FundraisingCurrency,
  type FundraisingSource,
} from "@/data/fundraising";

export type FundraisingProgressSource =
  | FundraisingSource
  | "unavailable";

export type FundraisingProgress = {
  goalAmount: number;
  raisedAmount: number | null;
  remainingAmount: number | null;
  percentage: number | null;
  currency: FundraisingCurrency;
  donationUrl: string;
  source: FundraisingProgressSource;
  updatedAt: string | null;
};

function normalizeRaisedAmount(amount: number) {
  return Math.max(0, amount);
}

function calculatePercentage(raisedAmount: number, goalAmount: number) {
  if (goalAmount <= 0) {
    return 0;
  }

  return Math.min(100, Math.round((raisedAmount / goalAmount) * 100));
}

export function normalizeFundraisingProgress(
  config: FundraisingConfig,
): FundraisingProgress {
  const raisedAmount =
    config.manualRaisedAmount === null
      ? null
      : normalizeRaisedAmount(config.manualRaisedAmount);

  if (raisedAmount === null) {
    return {
      goalAmount: config.goalAmount,
      raisedAmount: null,
      remainingAmount: null,
      percentage: null,
      currency: config.currency,
      donationUrl: config.donationUrl,
      source: "unavailable",
      updatedAt: null,
    };
  }

  return {
    goalAmount: config.goalAmount,
    raisedAmount,
    remainingAmount: Math.max(config.goalAmount - raisedAmount, 0),
    percentage: calculatePercentage(raisedAmount, config.goalAmount),
    currency: config.currency,
    donationUrl: config.donationUrl,
    source: config.source,
    updatedAt: config.manualRaisedAmountUpdatedAt,
  };
}

export function getFundraisingProgress() {
  return normalizeFundraisingProgress(fundraisingConfig);
}
