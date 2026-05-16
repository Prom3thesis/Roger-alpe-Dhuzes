import { ClosingMemorialQuote } from "@/components/remembrance/ClosingMemorialQuote";
import { MemorialFinalCTA } from "@/components/remembrance/MemorialFinalCTA";
import { MemorialHero } from "@/components/remembrance/MemorialHero";
import { MemorialLightSection } from "@/components/remembrance/MemorialLightSection";
import { MemorialOriginSection } from "@/components/remembrance/MemorialOriginSection";
import { ParticipationAndPaymentBlock } from "@/components/remembrance/ParticipationAndPaymentBlock";
import { PlacementAndMeaningSection } from "@/components/remembrance/PlacementAndMeaningSection";
import { RemembranceActionsSection } from "@/components/remembrance/RemembranceActionsSection";
import { RemembrancePeopleBlock } from "@/components/remembrance/RemembrancePeopleBlock";
import { RemembranceTransparencyBox } from "@/components/remembrance/RemembranceTransparencyBox";
import {
  remembranceActionProceedsNote,
  remembranceActions,
  remembranceParticipation,
} from "@/data/remembrance-actions";
import { siteConfig } from "@/data/site";

export default function HerinneringsactiePage() {
  return (
    <>
      <MemorialHero />
      <MemorialLightSection />
      <MemorialOriginSection />
      <RemembrancePeopleBlock />
      <RemembranceActionsSection actions={remembranceActions} />
      <RemembranceTransparencyBox proceedsNote={remembranceActionProceedsNote} />
      <ParticipationAndPaymentBlock
        channels={remembranceParticipation.channels}
        contact={siteConfig.contact}
        paymentMethods={remembranceParticipation.paymentMethods}
        shippingNote={remembranceParticipation.shippingNote}
      />
      <PlacementAndMeaningSection />
      <ClosingMemorialQuote />
      <MemorialFinalCTA />
    </>
  );
}
