import { DonationProgress } from "@/components/conversion/DonationProgress";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MemorialSupportTeaser } from "@/components/support/MemorialSupportTeaser";
import { OfficialDonationBlock } from "@/components/support/OfficialDonationBlock";
import { RevenueTransparencyBox } from "@/components/support/RevenueTransparencyBox";
import { ShareAndContactBlock } from "@/components/support/ShareAndContactBlock";
import { SupportFinalCTA } from "@/components/support/SupportFinalCTA";
import { SupportHero } from "@/components/support/SupportHero";
import { SupportProductsGrid } from "@/components/support/SupportProductsGrid";
import { WhySupportMatters } from "@/components/support/WhySupportMatters";
import {
  supportProductProceedsNote,
  supportProducts,
} from "@/data/support-products";
import { getFundraisingProgress } from "@/lib/fundraising/get-fundraising-progress";
import { formatCurrency } from "@/lib/utils/format-currency";

export default function DonerenPage() {
  const fundraisingProgress = getFundraisingProgress();
  const goalLabel = formatCurrency(
    fundraisingProgress.goalAmount,
    fundraisingProgress.currency,
  );

  return (
    <>
      <SupportHero
        donationUrl={fundraisingProgress.donationUrl}
        goalLabel={goalLabel}
      />

      <SectionContainer className="py-10 sm:py-12">
        <DonationProgress
          progress={fundraisingProgress}
          variant="prominent"
        />
      </SectionContainer>

      <OfficialDonationBlock donationUrl={fundraisingProgress.donationUrl} />
      <WhySupportMatters goalLabel={goalLabel} />
      <SupportProductsGrid products={supportProducts} />
      <RevenueTransparencyBox proceedsNote={supportProductProceedsNote} />
      <MemorialSupportTeaser />
      <ShareAndContactBlock />
      <SupportFinalCTA donationUrl={fundraisingProgress.donationUrl} />
    </>
  );
}
