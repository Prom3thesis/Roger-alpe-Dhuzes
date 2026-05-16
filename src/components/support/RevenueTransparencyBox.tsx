import { SectionContainer } from "@/components/layout/SectionContainer";

type RevenueTransparencyBoxProps = {
  proceedsNote: string;
};

export function RevenueTransparencyBox({
  proceedsNote,
}: RevenueTransparencyBoxProps) {
  return (
    <SectionContainer className="py-12 sm:py-14">
      <div className="rounded-lg border border-campaign-gold/50 bg-campaign-navy p-6 text-white shadow-shell sm:p-8">
        <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
          Transparantie
        </p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
          {proceedsNote}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Dat geldt voor de steunproducten en voor de acties die als steunroute
          aan Rogers campagne zijn verbonden. De bedoeling blijft helder:
          bijdragen aan zijn Alpe d&apos;HuZes-donaties.
        </p>
      </div>
    </SectionContainer>
  );
}
