import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { CTA_HREF } from "@/content/navigation";

export function FinalCta() {
  return (
    <SectionShell
      tone="dark"
      aria-label="Get started"
      bleed
    >
      <div className="relative isolate overflow-hidden">
        {/* Faint action backdrop */}
        <Image
          src="/images/coach-spot.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-55"
          style={{ objectPosition: "50% 40%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(95% 95% at 50% 50%, rgba(13,13,12,0.5) 0%, rgba(13,13,12,0.8) 100%)",
          }}
        />
        <div className="mx-auto flex max-w-[640px] flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
          <h2 className="font-display text-display font-bold uppercase text-fg">
            Ready? Your first in-person session&apos;s on me.
          </h2>
          <div className="mt-8">
            <Button href={CTA_HREF} size="lg">
              Claim your free session
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            First in-person session free · Money-back guarantee
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
