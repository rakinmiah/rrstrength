import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-sans font-semibold tracking-[0.02em] " +
  "transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-out)] " +
  "active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] " +
  "select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brick text-white hover:bg-brick-hover hover:-translate-y-px shadow-sm",
  secondary:
    "border border-line-strong text-fg hover:border-fg hover:bg-white/5",
  ghost: "text-fg hover:text-link underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-3 text-base min-h-11",
  lg: "px-7 py-4 text-base min-h-11",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

type AsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

type AsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
};

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className = "", children, onClick } =
    props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={props["aria-label"]}
        onClick={onClick}
        className={cls}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      aria-label={props["aria-label"]}
      onClick={onClick}
      className={cls}
    >
      {children}
    </button>
  );
}
