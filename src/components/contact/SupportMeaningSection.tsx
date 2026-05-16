import { SectionContainer } from "@/components/layout/SectionContainer";

const supportReasons = [
  {
    title: "Zichtbaarheid",
    text: "Lokale steun helpt Rogers actie verder reiken dan zijn eigen netwerk.",
  },
  {
    title: "Vertrouwen",
    text: "Sponsorvisuals en betrokken organisaties laten zien dat de campagne breder gedragen wordt.",
  },
  {
    title: "Beweging",
    text: "Elke vorm van hulp maakt de tocht, de steunacties en de fondsenwerving concreter.",
  },
];

export function SupportMeaningSection() {
  return (
    <section className="bg-campaign-background">
      <SectionContainer className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Waarom deze steun telt
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Roger staat hier niet alleen voor.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            De campagne draait om Rogers persoonlijke belofte, maar regionale
            steun maakt die belofte zichtbaarder. Sponsors en betrokken
            organisaties helpen om de actie verder te dragen.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {supportReasons.map((reason) => (
            <article
              className="rounded-lg border border-campaign-border bg-white p-5"
              key={reason.title}
            >
              <h3 className="text-lg font-black text-campaign-navy">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-campaign-muted">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
