import type { ElementType, ReactNode } from "react";

type Tone = "dark" | "surface" | "light";

const toneClasses: Record<Tone, string> = {
  dark: "bg-ink text-fg",
  surface: "bg-surface text-fg",
  light: "bg-bone text-ink-fg",
};

/**
 * SectionShell — owns vertical rhythm + tone band + centred content width.
 * Rhythm: 64px mobile / 88px tablet / 112px desktop (Phase 6 --section-y).
 */
export function SectionShell({
  id,
  tone = "dark",
  as: Tag = "section",
  bleed = false,
  className = "",
  innerClassName = "",
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: {
  id?: string;
  tone?: Tone;
  as?: ElementType;
  bleed?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={`${toneClasses[tone]} ${
        bleed ? "" : "py-16 md:py-22 lg:py-28"
      } ${className}`}
    >
      {bleed ? (
        children
      ) : (
        <div
          className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 ${innerClassName}`}
        >
          {children}
        </div>
      )}
    </Tag>
  );
}
