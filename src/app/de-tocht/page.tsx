import { MountainChallengeIntro } from "@/components/route/MountainChallengeIntro";
import { PreparationIntroSection } from "@/components/route/PreparationIntroSection";
import { RouteCampaignTimeline } from "@/components/route/RouteCampaignTimeline";
import { RouteFinalCTA } from "@/components/route/RouteFinalCTA";
import { RouteMapFeature } from "@/components/route/RouteMapFeature";
import { RoutePageHero } from "@/components/route/RoutePageHero";
import { RouteParticipationSection } from "@/components/route/RouteParticipationSection";
import { TrainingGallery } from "@/components/route/TrainingGallery";
import { TrainingRealitySection } from "@/components/route/TrainingRealitySection";

export default function DeTochtPage() {
  return (
    <>
      <RoutePageHero />
      <MountainChallengeIntro />
      <RouteMapFeature />
      <RouteParticipationSection />
      <PreparationIntroSection />
      <TrainingGallery />
      <TrainingRealitySection />
      <RouteCampaignTimeline />
      <RouteFinalCTA />
    </>
  );
}
