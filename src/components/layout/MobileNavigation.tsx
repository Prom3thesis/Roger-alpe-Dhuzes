"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { mainNavigation, primaryNavigationCta } from "@/data/navigation";

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    detailsRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="pointer-events-auto relative z-50 flex items-center gap-3 xl:hidden">
      <Button
        className="px-4"
        href={primaryNavigationCta.href}
        size="sm"
        variant="primary"
      >
        {primaryNavigationCta.label}
      </Button>

      <details className="relative" ref={detailsRef}>
        <summary
          aria-controls="mobile-navigation"
          aria-label="Menu"
          className="pointer-events-auto relative z-50 inline-flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all marker:hidden hover:border-campaign-gold/70 hover:bg-white/20 hover:text-campaign-gold hover:shadow-[0_0_0_3px_rgb(248_183_58_/_0.22)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-campaign-gold [&::-webkit-details-marker]:hidden"
          role="button"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className="block h-0.5 rounded-full bg-current" />
            <span className="block h-0.5 rounded-full bg-current" />
            <span className="block h-0.5 rounded-full bg-current" />
          </span>
        </summary>

        <div
          className="fixed inset-x-4 top-24 z-50 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border border-white/15 bg-campaign-navy shadow-shell sm:left-auto sm:right-6 sm:w-[22rem]"
          id="mobile-navigation"
        >
          <nav aria-label="Mobiele hoofdnavigatie" className="p-3">
            <ul className="grid gap-1">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-xl bg-white/[0.03] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-campaign-gold"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-white/10 pt-3">
              <Button
                className="w-full"
                href={primaryNavigationCta.href}
                onClick={closeMenu}
                variant="primary"
              >
                {primaryNavigationCta.label}
              </Button>
            </div>
          </nav>
        </div>
      </details>
    </div>
  );
}
