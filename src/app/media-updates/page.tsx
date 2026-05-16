import { CampaignTimeline } from "@/components/media/CampaignTimeline";
import { FeaturedMediaSection } from "@/components/media/FeaturedMediaSection";
import { FeaturedUpdatesSection } from "@/components/media/FeaturedUpdatesSection";
import { FollowCampaignBlock } from "@/components/media/FollowCampaignBlock";
import { MediaUpdatesFinalCTA } from "@/components/media/MediaUpdatesFinalCTA";
import { MediaUpdatesHero } from "@/components/media/MediaUpdatesHero";
import { TrainingImageStrip } from "@/components/media/TrainingImageStrip";
import { UpdatesGrid } from "@/components/media/UpdatesGrid";
import { featuredMediaItem } from "@/data/media";
import { siteConfig } from "@/data/site";
import { getAllUpdates, getFeaturedUpdates } from "@/lib/content/updates";

const timelineSlugs = [
  "waarom-roger-alpe-dhuzes-loopt",
  "eerste-trainingswandeling-goc-parkstad",
  "eerlijke-training-update",
  "een-licht-voor-wie-we-missen",
  "roger-bij-rtv-parkstad",
] as const;

export default function MediaUpdatesPage() {
  const allUpdates = getAllUpdates();
  const featuredUpdates = getFeaturedUpdates();
  const timelineUpdates = timelineSlugs
    .map((slug) => allUpdates.find((update) => update.metadata.slug === slug))
    .filter((update) => update !== undefined);

  return (
    <>
      <MediaUpdatesHero />
      <FeaturedMediaSection item={featuredMediaItem} />
      <FeaturedUpdatesSection updates={featuredUpdates} />
      <UpdatesGrid updates={allUpdates} />
      <CampaignTimeline updates={timelineUpdates} />
      <TrainingImageStrip />
      <FollowCampaignBlock facebookHref={siteConfig.social.facebookGroup} />
      <MediaUpdatesFinalCTA />
    </>
  );
}
