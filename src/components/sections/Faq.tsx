import { SectionShell } from "@/components/layout/SectionShell";
import { FaqItem } from "@/components/ui/FaqItem";
import { faqs, FAQ_HEADLINE } from "@/content/faqs";

export function Faq() {
  return (
    <SectionShell id="faq" tone="dark" aria-labelledby="faq-h">
      <div className="mx-auto max-w-[680px]">
        <h2
          id="faq-h"
          className="text-center font-display text-h2 font-bold uppercase text-fg"
        >
          {FAQ_HEADLINE}
        </h2>
        <div className="mt-8">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} faq={f} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
