import { SectionShell } from "@/components/layout/SectionShell";
import { Icon } from "@/components/ui/Icon";
import { credentials } from "@/content/credentials";

/**
 * Credential rail — a framed dark band that reads as the hero's foundation
 * (proof), not a pasted-on strip. Evenly-divided cells, each with a brick icon
 * badge, give it structure and rhythm.
 */
export function TrustStrip() {
  return (
    <SectionShell
      tone="surface"
      aria-label="Coach credentials"
      className="border-y border-line !py-8 lg:!py-10"
    >
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-8 lg:gap-x-14">
        {credentials.map((c) => (
          <li
            key={c.label}
            className="flex w-[140px] flex-col items-center gap-3 text-center"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brick/12 text-brick ring-1 ring-brick/20">
              <Icon name={c.icon} size={20} />
            </span>
            <span className="text-[13px] font-semibold uppercase leading-snug tracking-[0.04em] text-fg">
              {c.label}
            </span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
