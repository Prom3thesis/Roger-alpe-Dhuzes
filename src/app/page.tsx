import { CampaignHero } from "@/components/home/CampaignHero";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { MediaFeatureCard } from "@/components/home/MediaFeatureCard";
import { MemorialTeaser } from "@/components/home/MemorialTeaser";
import { RoutePreview } from "@/components/home/RoutePreview";
import { SponsorStrip } from "@/components/home/SponsorStrip";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { SupportRouteCards } from "@/components/home/SupportRouteCards";
import { TransformationHighlight } from "@/components/home/TransformationHighlight";
import { DonationProgress } from "@/components/conversion/DonationProgress";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { getFundraisingProgress } from "@/lib/fundraising/get-fundraising-progress";

export default function Home() {
  const fundraisingProgress = getFundraisingProgress();

  return (
    <>
      <CampaignHero donationUrl={fundraisingProgress.donationUrl} />

      <SectionContainer className="py-10 sm:py-12">
        <DonationProgress progress={fundraisingProgress} variant="compact" />
      </SectionContainer>

      <StoryTeaser />
      <TransformationHighlight />
      <RoutePreview />
      <MediaFeatureCard />
      <SupportRouteCards donationUrl={fundraisingProgress.donationUrl} />
      <MemorialTeaser />
      <SponsorStrip />
      <HomeFinalCTA />
    </>
  );
}
