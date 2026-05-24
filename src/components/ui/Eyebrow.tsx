import type { ReactNode } from "react";

export function Eyebrow({
  children,
  onLight = false,
  className = "",
}: {
  children: ReactNode;
  onLight?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`block font-sans text-eyebrow font-semibold uppercase ${
        onLight ? "text-ink-muted" : "text-brick"
      } ${className}`}
    >
      {children}
    </span>
  );
}
