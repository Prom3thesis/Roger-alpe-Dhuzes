import { CollaborationBlock } from "@/components/contact/CollaborationBlock";
import { ContactBlock } from "@/components/contact/ContactBlock";
import { OrderingAndParticipationBlock } from "@/components/contact/OrderingAndParticipationBlock";
import { SponsorGrid } from "@/components/contact/SponsorGrid";
import { SponsorsContactFinalCTA } from "@/components/contact/SponsorsContactFinalCTA";
import { SponsorsContactHero } from "@/components/contact/SponsorsContactHero";
import { SupportMeaningSection } from "@/components/contact/SupportMeaningSection";
import {
  remembranceActions,
  remembranceParticipation,
} from "@/data/remembrance-actions";
import { siteConfig } from "@/data/site";
import { sponsors } from "@/data/sponsors";
import { supportProducts } from "@/data/support-products";

export default function SponsorsContactPage() {
  return (
    <>
      <SponsorsContactHero />
      <SponsorGrid sponsors={sponsors} />
      <SupportMeaningSection />
      <ContactBlock contact={siteConfig.contact} social={siteConfig.social} />
      <OrderingAndParticipationBlock
        channels={remembranceParticipation.channels}
        contact={siteConfig.contact}
        paymentMethods={remembranceParticipation.paymentMethods}
        products={supportProducts}
        remembranceActions={remembranceActions}
        shippingNote={remembranceParticipation.shippingNote}
        social={siteConfig.social}
      />
      <CollaborationBlock />
      <SponsorsContactFinalCTA />
    </>
  );
}
