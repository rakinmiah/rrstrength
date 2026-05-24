import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  steps,
  STEPS_EYEBROW,
  STEPS_HEADLINE,
  STEPS_CONTEXT,
} from "@/content/steps";

export function HowItWorks() {
  return (
    <SectionShell id="how" tone="dark" aria-labelledby="how-h">
      <div className="grid gap-10 lg:grid-cols-[38fr_62fr] lg:gap-14">
        {/* Sticky heading */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow>{STEPS_EYEBROW}</Eyebrow>
          <h2
            id="how-h"
            className="mt-3 font-display text-h2 font-bold uppercase text-fg"
          >
            {STEPS_HEADLINE}
          </h2>
          <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-muted">
            {STEPS_CONTEXT}
          </p>
        </div>

        {/* Stepped list */}
        <ol className="relative">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-5 border-b border-line py-6 last:border-b-0"
            >
              <span
                aria-hidden
                className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong font-display text-h4 font-semibold text-brick"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-h4 font-semibold uppercase text-fg">
                  {s.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
