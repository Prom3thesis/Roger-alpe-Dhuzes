import { AlpeTraditionSection } from "@/components/story/AlpeTraditionSection";
import { ImpossibleWeightSection } from "@/components/story/ImpossibleWeightSection";
import { MotherBondSection } from "@/components/story/MotherBondSection";
import { PromiseSection } from "@/components/story/PromiseSection";
import { RegistrationSection } from "@/components/story/RegistrationSection";
import { StoryFinalCTA } from "@/components/story/StoryFinalCTA";
import { StoryPageHero } from "@/components/story/StoryPageHero";
import { StorySupportSection } from "@/components/story/StorySupportSection";
import { TransformationSection } from "@/components/story/TransformationSection";
import { TurningPointSection } from "@/components/story/TurningPointSection";
import { fundraisingConfig } from "@/data/fundraising";
import { formatCurrency } from "@/lib/utils/format-currency";

export default function MijnVerhaalPage() {
  const goalLabel = formatCurrency(fundraisingConfig.goalAmount);

  return (
    <>
      <StoryPageHero />
      <MotherBondSection />
      <AlpeTraditionSection />
      <PromiseSection />
      <ImpossibleWeightSection />
      <TurningPointSection />
      <TransformationSection />
      <RegistrationSection />
      <StorySupportSection goalLabel={goalLabel} />
      <StoryFinalCTA />
    </>
  );
}
