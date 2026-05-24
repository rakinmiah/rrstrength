import { Button } from "@/components/ui/Button";
import { CTA_HREF } from "@/content/navigation";
import type { Tier } from "@/content/pricing";

export function PricingTierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`relative flex flex-col rounded-lg border p-6 ${
        tier.featured
          ? "border-brick bg-surface-raised shadow-md lg:scale-[1.03]"
          : "border-line bg-surface"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-6 rounded-pill bg-brick px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-h4 font-semibold uppercase text-fg">
        {tier.name}
      </h3>
      <p className="mt-3 font-display text-display text-fg">
        {tier.price}
        <span className="align-baseline text-h4 text-muted">{tier.period}</span>
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{tier.blurb}</p>
      <div className="mt-6">
        <Button
          href={CTA_HREF}
          variant={tier.featured ? "primary" : "secondary"}
          className="w-full"
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
