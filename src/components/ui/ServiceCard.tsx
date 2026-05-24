import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href="#pricing"
      aria-label={`${service.title} coaching — see pricing`}
      className={`group relative flex flex-col rounded-lg border p-6 transition-all duration-200 ease-[var(--ease-out)] hover:-translate-y-[3px] hover:shadow-md ${
        service.featured
          ? "border-brick bg-surface-raised shadow-md lg:scale-[1.03]"
          : "border-line bg-surface hover:border-brick"
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3 left-6 rounded-pill bg-brick px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
          Most popular
        </span>
      )}
      <Icon name={service.icon} size={28} className="text-brick" />
      <h3 className="mt-4 font-display text-h4 font-semibold uppercase text-fg">
        {service.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        {service.blurb}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-muted">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <Icon name="check" size={16} className="text-brick" />
            {b}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-fg">
        See pricing
        <Icon
          name="arrow"
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
