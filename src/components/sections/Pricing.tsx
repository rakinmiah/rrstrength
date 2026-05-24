import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PricingTierCard } from "@/components/ui/PricingTierCard";
import { ComparisonAccordion } from "@/components/ui/ComparisonAccordion";
import {
  tiers,
  bundles,
  PRICING_EYEBROW,
  PRICING_HEADLINE,
  PRICING_MICROCOPY,
} from "@/content/pricing";

export function Pricing() {
  return (
    <SectionShell id="pricing" tone="dark" aria-labelledby="pricing-h">
      <Eyebrow>{PRICING_EYEBROW}</Eyebrow>
      <h2
        id="pricing-h"
        className="mt-3 font-display text-h2 font-bold uppercase text-fg"
      >
        {PRICING_HEADLINE}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3 lg:items-stretch lg:pt-3">
        {tiers.map((t) => (
          <PricingTierCard key={t.id} tier={t} />
        ))}
      </div>

      {/* In-person bundles */}
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-muted">
        <span className="font-semibold text-fg">In-person session blocks:</span>
        {bundles.map((b, i) => (
          <span key={b.sessions}>
            {b.sessions} for {b.total}{" "}
            <span className="text-muted">({b.each})</span>
            {i < bundles.length - 1 && (
              <span aria-hidden className="ml-3 text-line-strong">
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm text-muted">{PRICING_MICROCOPY}</p>

      <ComparisonAccordion />
    </SectionShell>
  );
}
