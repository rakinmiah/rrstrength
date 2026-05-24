"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { Faq } from "@/content/faqs";

export function FaqItem({ faq, defaultOpen = false }: { faq: Faq; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-h4 uppercase text-fg"
        >
          {faq.q}
          <Icon
            name="chevron"
            size={22}
            className={`shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      {open && (
        <div id={panelId} className="pb-5 text-[15px] leading-relaxed text-muted">
          {faq.a}
        </div>
      )}
    </div>
  );
}
