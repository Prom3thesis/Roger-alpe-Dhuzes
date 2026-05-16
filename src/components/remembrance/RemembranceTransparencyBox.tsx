import { SectionContainer } from "@/components/layout/SectionContainer";

type RemembranceTransparencyBoxProps = {
  proceedsNote: string;
};

export function RemembranceTransparencyBox({
  proceedsNote,
}: RemembranceTransparencyBoxProps) {
  return (
    <section className="bg-white">
      <SectionContainer as="div" className="py-12 sm:py-14">
        <div className="rounded-lg border border-campaign-gold/50 bg-campaign-navy p-6 text-white shadow-shell sm:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
            Volledige opbrengst
          </p>
          <h2 className="mt-3 max-w-4xl break-words text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            {proceedsNote}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            De actie blijft daarmee helder: iemand waardig herdenken en tegelijk
            Rogers Alpe d&apos;HuZes-missie ondersteunen.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
