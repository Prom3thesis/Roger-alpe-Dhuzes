import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/content/MarkdownContent";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import {
  formatUpdateDate,
  getUpdateBySlug,
  getUpdateSlugs,
  updateCategoryLabels,
} from "@/lib/content/updates";

type UpdateDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getUpdateSlugs().map((slug) => ({ slug }));
}

export default async function UpdateDetailPage({ params }: UpdateDetailPageProps) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  const { metadata } = update;
  const formattedDate = formatUpdateDate(metadata.date);

  return (
    <>
      <section className="bg-campaign-navy text-white">
        <SectionContainer className="py-12 sm:py-16">
          <Link
            className="inline-flex text-sm font-black text-campaign-gold underline-offset-4 hover:underline"
            href="/media-updates"
            prefetch={false}
          >
            Terug naar media & updates
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-normal text-campaign-gold">
                {updateCategoryLabels[metadata.category]}
              </span>
              <time className="text-sm font-bold text-white/70" dateTime={metadata.date}>
                {formattedDate}
              </time>
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              {metadata.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
              {metadata.excerpt}
            </p>
          </div>
        </SectionContainer>
      </section>

      <section className="bg-campaign-background">
        <SectionContainer className="py-12 sm:py-16">
          <article className="mx-auto max-w-4xl">
            {metadata.embedUrl && metadata.externalUrl && metadata.featuredImage ? (
              <div className="mb-9 overflow-hidden rounded-lg border border-campaign-border bg-campaign-navy shadow-shell">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-64 overflow-hidden bg-campaign-navy sm:min-h-80 lg:min-h-full">
                    <Image
                      alt={metadata.featuredImageAlt ?? ""}
                      className="h-full w-full object-cover"
                      height={900}
                      priority
                      sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
                      src={metadata.featuredImage}
                      width={1200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-campaign-navy/35 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-campaign-navy/86 px-3 py-2 text-xs font-black uppercase tracking-normal text-campaign-gold shadow-[0_12px_34px_rgb(0_0_0_/_0.24)]">
                      <span
                        aria-hidden="true"
                        className="flex size-7 items-center justify-center rounded-full bg-campaign-gold text-campaign-navy"
                      >
                        <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-current" />
                      </span>
                      Video-interview
                    </div>
                  </div>

                  <div className="p-6 text-white sm:p-8 lg:p-10">
                    <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
                      RTV Parkstad
                    </p>
                    <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                      Bekijk het interview direct via YouTube.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-white/76">
                      De video van het RTV Parkstad-interview is beschikbaar en
                      opent via de officiële YouTube-route.
                    </p>
                    <Button
                      className="mt-6 w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto"
                      href={metadata.externalUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Bekijk het RTV Parkstad-interview
                    </Button>
                  </div>
                </div>
              </div>
            ) : metadata.featuredImage ? (
              <div className="mb-9 overflow-hidden rounded-lg border border-campaign-border bg-white shadow-shell">
                <Image
                  alt={metadata.featuredImageAlt ?? ""}
                  className="h-auto w-full object-cover"
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 896px, calc(100vw - 40px)"
                  src={metadata.featuredImage}
                  width={1400}
                />
              </div>
            ) : null}

            <div className="rounded-lg border border-campaign-border bg-white p-6 shadow-shell sm:p-8">
              <MarkdownContent content={update.content} />

              {metadata.sourceLabel || metadata.sourceContext ? (
                <div className="mt-9 rounded-lg border border-campaign-border bg-campaign-background p-4 text-sm leading-6 text-campaign-muted">
                  <p className="font-black text-campaign-navy">Broncontext</p>
                  <p className="mt-1">
                    {[metadata.sourceLabel, metadata.sourceContext]
                      .filter(Boolean)
                      .join(" - ")}
                  </p>
                </div>
              ) : null}

              {metadata.externalUrl && !metadata.embedUrl ? (
                <div className="mt-6 rounded-lg border border-campaign-border bg-campaign-background p-4">
                  <p className="text-sm font-bold leading-6 text-campaign-muted">
                    Open het interview ook rechtstreeks op YouTube.
                  </p>
                  <Button
                    className="mt-4"
                    href={metadata.externalUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    Bekijk de RTV Parkstad-video
                  </Button>
                </div>
              ) : null}
            </div>

            <div className="mt-8 rounded-lg bg-campaign-navy p-6 text-white sm:p-8">
              <p className="text-sm font-black uppercase tracking-normal text-campaign-gold">
                Steun de campagne
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                Help Roger zijn belofte richting Alpe d&apos;HuZes waarmaken.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                Deze updates laten zien hoe de campagne groeit. Steun Roger via
                de centrale donatie- en steunpagina.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="w-full sm:w-auto" href="/doneren">
                  Steun Roger
                </Button>
                <Button
                  className="w-full border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 sm:w-auto"
                  href="/de-tocht"
                  variant="outline"
                >
                  Bekijk de tocht
                </Button>
              </div>
            </div>
          </article>
        </SectionContainer>
      </section>
    </>
  );
}
