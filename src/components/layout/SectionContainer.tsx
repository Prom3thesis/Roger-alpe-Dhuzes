import type { ReactNode } from "react";

type SectionContainerProps = {
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  as: Component = "section",
  children,
  className,
}: SectionContainerProps) {
  return (
    <Component
      className={[
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
