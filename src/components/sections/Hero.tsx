import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTA_HREF } from "@/content/navigation";

/**
 * Hero — FULL-BLEED, lower-left offset copy (Nike-grade athletic hero).
 * V0.1: dark gradient stand-in for the background.
 * V0.5: replace the gradient div with <Image> of the optimised
 * Ramadan-Rumble deadlift (focal 50%,38%) + bottom-up scrim.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[88svh] items-end overflow-hidden lg:min-h-svh"
    >
      {/* Full-bleed action photograph */}
      <Image
        src="/images/coach-team.jpg"
        alt="Rashed Rahman, RR Strength coach, with two clients in the gym"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: "50% 32%" }}
      />
      {/* Bottom-up legibility scrim */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.15) 68%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="max-w-[640px]">
          <div className="rise-in" style={{ animationDelay: "0ms" }}>
            <Eyebrow>Strength Coaching · Burgess Hill &amp; Online</Eyebrow>
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
            One-to-one, online and hybrid coaching from a nationally-competed,
            BSc-qualified strength coach — backed by a money-back guarantee.
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
