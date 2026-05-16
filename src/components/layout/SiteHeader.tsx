import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import {
  mainNavigation,
  primaryNavigationCta,
} from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-white/10 bg-campaign-navy text-white">
      <SectionContainer
        as="div"
        className="flex min-h-20 items-center justify-between gap-5 py-4"
      >
        <Link
          className="group flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-campaign-gold"
          href="/"
        >
          <Image
            alt="Roger Chappin Alpe d'HuZes campagnelogo."
            className="h-12 w-auto rounded-md bg-white object-contain p-1 shadow-[0_10px_24px_rgb(0_0_0_/_0.18)] sm:h-14"
            height={80}
            priority
            src="/images/brand/roger-campaign-logo.jpg"
            width={120}
          />
          <span className="hidden min-w-0 gap-0.5 sm:grid">
            <span className="text-base font-black leading-tight tracking-normal text-white">
              Roger Chappin
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-campaign-gold">
              ALPE D&rsquo;HUZES 2026
            </span>
          </span>
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="hidden items-center gap-1 xl:flex"
        >
          {mainNavigation.map((item) => (
            <Link
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-white/78 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-campaign-gold"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href={primaryNavigationCta.href} variant="primary">
            {primaryNavigationCta.label}
          </Button>
        </div>

        <MobileNavigation />
      </SectionContainer>
    </header>
  );
}
