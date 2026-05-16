import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md";

type CommonButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = CommonButtonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = CommonButtonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-campaign-gold bg-campaign-gold !text-campaign-navy shadow-[0_12px_34px_rgb(246_182_66_/_0.26)] hover:border-campaign-amber hover:bg-campaign-amber hover:!text-campaign-navy",
  secondary:
    "border-campaign-blue bg-campaign-blue !text-white hover:border-campaign-blue-hover hover:bg-campaign-blue-hover hover:!text-white",
  outline:
    "border-campaign-border bg-white/80 !text-campaign-navy hover:border-campaign-blue hover:bg-white hover:!text-campaign-navy",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    size = "md",
    variant = "primary",
    ...restProps
  } = props;

  const classes = cx(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full border font-bold leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-campaign-gold",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if ("href" in restProps && restProps.href) {
    return (
      <Link {...restProps} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = restProps as Omit<
    NativeButtonProps,
    "children" | "className" | "href" | "size" | "variant"
  >;
  const type = buttonProps.type ?? "button";

  return (
    <button {...buttonProps} className={classes} type={type}>
      {children}
    </button>
  );
}
