import { SectionContainer } from "@/components/layout/SectionContainer";

export function PromiseSection() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            De diagnose en de belofte
          </h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            <p>
              Toen Riny kanker kreeg, kreeg Alpe d&apos;HuZes voor Roger een
              andere lading. In die periode deed hij haar een belofte die
              groter was dan wat op dat moment realistisch voelde.
            </p>
            <p>
              In de kern beloofde Roger: als hij ooit genoeg zou afvallen en
              mobiel genoeg zou worden, dan zou hij Alpe d&apos;HuZes voor haar
              lopen.
            </p>
          </div>

          <div className="mt-9 rounded-lg border border-white/15 bg-white/10 p-6 shadow-shell sm:p-8">
            <p className="text-2xl font-black leading-snug text-campaign-gold sm:text-3xl">
              Als het ooit mogelijk wordt, dan wordt die berg de plek waar de
              belofte werkelijkheid moet worden.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
