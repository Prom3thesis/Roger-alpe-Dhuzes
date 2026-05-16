import { Button } from "@/components/ui/Button";
import type { FundraisingProgress } from "@/lib/fundraising/get-fundraising-progress";
import { formatCurrency } from "@/lib/utils/format-currency";

type DonationProgressVariant = "compact" | "prominent";

type DonationProgressProps = {
  className?: string;
  progress: FundraisingProgress;
  variant?: DonationProgressVariant;
};

type KnownFundraisingProgress = FundraisingProgress & {
  percentage: number;
  raisedAmount: number;
  remainingAmount: number;
};

const variantClasses: Record<DonationProgressVariant, string> = {
  compact: "gap-5 p-5",
  prominent: "gap-6 p-6 sm:p-7",
};

const headingClasses: Record<DonationProgressVariant, string> = {
  compact: "text-xl",
  prominent: "text-2xl sm:text-3xl",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function hasKnownProgress(
  progress: FundraisingProgress,
): progress is KnownFundraisingProgress {
  return (
    progress.raisedAmount !== null &&
    progress.remainingAmount !== null &&
    progress.percentage !== null
  );
}

export function DonationProgress({
  className,
  progress,
  variant = "compact",
}: DonationProgressProps) {
  const goalLabel = formatCurrency(progress.goalAmount, progress.currency);
  const progressIsKnown = hasKnownProgress(progress);

  return (
    <section
      aria-label="Donatievoortgang"
      className={cx(
        "grid rounded-lg border border-campaign-border bg-white shadow-[0_18px_55px_rgb(6_25_47_/_0.10)]",
        variantClasses[variant],
        className,
      )}
    >
      <div className="grid gap-2">
        <p className="text-xs font-black uppercase text-campaign-red">
          Donatievoortgang
        </p>
        <h2
          className={cx(
            "font-black leading-tight tracking-normal text-campaign-navy",
            headingClasses[variant],
          )}
        >
          Help Roger richting {goalLabel}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-campaign-muted">
          Rogers offici&euml;le Alpe d&apos;HuZes-actiepagina blijft de plek voor
          doneren en voor de actuele tussenstand.
        </p>
      </div>

      {progressIsKnown ? (
        <div className="grid gap-4">
          <dl className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-md border border-campaign-border bg-campaign-background p-4">
              <dt className="text-xs font-bold uppercase text-campaign-muted">
                Opgehaald
              </dt>
              <dd className="mt-1 text-lg font-black text-campaign-navy">
                {formatCurrency(progress.raisedAmount, progress.currency)}
              </dd>
            </div>
            <div className="rounded-md border border-campaign-border bg-campaign-background p-4">
              <dt className="text-xs font-bold uppercase text-campaign-muted">
                Doel
              </dt>
              <dd className="mt-1 text-lg font-black text-campaign-navy">
                {goalLabel}
              </dd>
            </div>
            <div className="rounded-md border border-campaign-border bg-campaign-background p-4">
              <dt className="text-xs font-bold uppercase text-campaign-muted">
                Nog te gaan
              </dt>
              <dd className="mt-1 text-lg font-black text-campaign-navy">
                {formatCurrency(progress.remainingAmount, progress.currency)}
              </dd>
            </div>
          </dl>

          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-4 text-sm font-bold text-campaign-navy">
              <span>{progress.percentage}% van het doel</span>
              <span>{goalLabel}</span>
            </div>
            <div
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={progress.percentage}
              aria-valuetext={`${formatCurrency(
                progress.raisedAmount,
                progress.currency,
              )} opgehaald van ${goalLabel}`}
              className="h-3 overflow-hidden rounded-full bg-campaign-border"
              role="progressbar"
            >
              <div
                className="h-full rounded-full bg-campaign-red"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 rounded-md border border-campaign-border bg-campaign-background p-4">
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase text-campaign-muted">
                Donatiedoel
              </dt>
              <dd className="mt-1 text-lg font-black text-campaign-navy">
                {goalLabel}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-campaign-muted">
                Tussenstand
              </dt>
              <dd className="mt-1 text-sm font-bold text-campaign-navy">
                Actueel via de offici&euml;le actiepagina
              </dd>
            </div>
          </dl>
          <p className="text-sm leading-6 text-campaign-muted">
            Bekijk de actuele donatiestand op Rogers offici&euml;le Alpe
            d&apos;HuZes-actiepagina.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          className="w-full sm:w-auto"
          href={progress.donationUrl}
          rel="noopener noreferrer"
          target="_blank"
          variant="primary"
        >
          Doneer via de offici&euml;le actiepagina
        </Button>
        <p className="text-xs leading-5 text-campaign-muted">
          Je doneert via de offici&euml;le Alpe d&apos;HuZes-omgeving.
        </p>
      </div>
    </section>
  );
}
