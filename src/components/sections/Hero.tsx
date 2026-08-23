import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTA_HREF } from "@/content/navigation";

/**
 * Hero — FULL-BLEED, lower-left offset copy (Nike-grade athletic hero).
 * `isolate` is load-bearing: it gives the section its own stacking context so
 * the -z-20 photograph and -z-10 scrim stay behind the copy instead of
 * escaping to the root and painting behind the opaque body background.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden pt-20 sm:items-end lg:min-h-svh lg:pt-0"
    >
      {/* Full-bleed photograph — portrait crop on phones, landscape on larger screens */}
      <Image
        src="/images/coach-team-mobile.jpg"
        alt="Rashed Rahman, RR Strength coach, with two clients in the gym"
        fill
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover sm:hidden"
        style={{ objectPosition: "50% 18%" }}
      />
      <Image
        src="/images/coach-team.jpg"
        alt="Rashed Rahman, RR Strength coach, with two clients in the gym"
        fill
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 hidden object-cover sm:block"
        style={{ objectPosition: "50% 32%" }}
      />
      {/* Bottom-up legibility scrim. Tuned by measuring worst-case contrast of
          the copy against the composited photo: the headline and lead now clear
          WCAG AA (10.1:1 and 6.6:1) where the old ramp left them at 1.2–1.4:1. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.84) 50%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="max-w-[640px]">
          <div className="rise-in" style={{ animationDelay: "0ms" }}>
            <Eyebrow>Strength coaching · Burgess Hill & online</Eyebrow>
          </div>
          <h1
            className="rise-in mt-4 font-display text-display font-bold uppercase text-fg"
            style={{ animationDelay: "60ms" }}
          >
            Get genuinely strong —{" "}
            <span className="text-brick">and keep it.</span>
          </h1>
          <p
            className="rise-in mt-5 max-w-xl text-lead text-muted"
            style={{ animationDelay: "120ms" }}
          >
            One-to-one, online and hybrid coaching from a nationally competed,
            BSc-qualified strength coach, backed by a money-back guarantee.
          </p>
          <div
            className="rise-in mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <Button href={CTA_HREF} size="lg">
              Claim your free session
            </Button>
            <Button href="#results" variant="secondary" size="lg">
              See real results
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
          <p
            className="rise-in mt-4 text-sm text-muted"
            style={{ animationDelay: "240ms" }}
          >
            First in-person session free
          </p>
        </div>
      </div>
    </section>
  );
}
