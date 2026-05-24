import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  services,
  SERVICES_EYEBROW,
  SERVICES_HEADLINE,
} from "@/content/services";

export function Services() {
  return (
    <SectionShell id="services" tone="surface" aria-labelledby="services-h">
      <Eyebrow>{SERVICES_EYEBROW}</Eyebrow>
      <h2
        id="services-h"
        className="mt-3 max-w-2xl font-display text-h2 font-bold uppercase text-fg"
      >
        {SERVICES_HEADLINE}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3 lg:items-stretch lg:pt-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </SectionShell>
  );
}
