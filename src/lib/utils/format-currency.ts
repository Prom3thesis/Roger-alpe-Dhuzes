import type { FundraisingCurrency } from "@/data/fundraising";

const amountFormatter = new Intl.NumberFormat("nl-NL", {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const currencySymbols: Record<FundraisingCurrency, string> = {
  EUR: "\u20ac",
};

export function formatCurrency(
  amount: number,
  currency: FundraisingCurrency = "EUR",
) {
  return `${currencySymbols[currency]} ${amountFormatter.format(amount)}`;
}
