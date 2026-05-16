import { SectionContainer } from "@/components/layout/SectionContainer";

export function ClosingMemorialQuote() {
  return (
    <section className="bg-campaign-background">
      <SectionContainer as="div" className="py-14 sm:py-16">
        <figure className="mx-auto max-w-4xl rounded-lg border border-campaign-border bg-white p-7 text-center shadow-[0_18px_55px_rgb(6_25_47_/_0.08)] sm:p-10">
          <blockquote className="text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            &ldquo;Want zolang we blijven herinneren, blijven zij een beetje bij
            ons.&rdquo;
          </blockquote>
        </figure>
      </SectionContainer>
    </section>
  );
}
