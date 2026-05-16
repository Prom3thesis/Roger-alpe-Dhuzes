import Link from "next/link";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import {
  mainNavigation,
  primaryNavigationCta,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-campaign-border bg-campaign-navy text-white">
      <SectionContainer
        as="div"
        className="grid gap-10 py-12 md:grid-cols-[1.1fr_1fr_0.8fr]"
      >
        <div className="max-w-sm">
          <p className="text-lg font-black">{siteConfig.title}</p>
          <p className="mt-3 text-sm leading-6 text-white/72">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footernavigatie">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-campaign-gold">
            Pagina&apos;s
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex rounded-md py-1 text-sm font-semibold text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-campaign-gold"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-campaign-gold">
            Steunen
          </p>
          <p className="mt-4 text-sm leading-6 text-white/72">
            De centrale route voor doneren en steunen krijgt hier sitebreed een
            vaste plek.
          </p>
          <Button
            className="mt-5"
            href={primaryNavigationCta.href}
            variant="primary"
          >
            {primaryNavigationCta.label}
          </Button>
        </div>
      </SectionContainer>
    </footer>
  );
}
