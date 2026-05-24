import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CTA_HREF } from "@/content/navigation";

export function About() {
  return (
    <SectionShell id="about" tone="dark" aria-labelledby="about-h">
      <div className="grid items-center gap-10 lg:grid-cols-[42fr_58fr] lg:gap-14">
        {/* Portrait (narrow column) */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-lg border border-line">
          <Image
            src="/images/coach-coaching.jpg"
            alt="Rashed Rahman coaching a client at the gym"
            fill
            sizes="(max-width: 1024px) 90vw, 460px"
            className="object-cover"
            style={{ objectPosition: "60% 40%" }}
          />
        </div>

        {/* Story (wide column) */}
        <div>
          <Eyebrow>Meet your coach</Eyebrow>
          <h2
            id="about-h"
            className="mt-4 font-display text-h2 font-bold uppercase text-fg"
          >
            I started exactly where you are.
          </h2>

          <blockquote className="mt-6 border-l-2 border-brick pl-5 font-display text-h3 uppercase text-fg">
            “The muscle was the byproduct.”
          </blockquote>

          <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-relaxed text-muted">
            <p>
              I got into lifting to look good. What I didn&apos;t expect was
              what it did to my head — the discipline, the confidence, the way
              it spilled into everything else.
            </p>
            <p>
              I&apos;ve trained since I was 14, competed at national level, and
              earned a First-Class degree so I could coach it properly. Now I
              help people — first-timers and competitors alike — get the same
              thing I did.
            </p>
          </div>

          <div className="mt-8">
            <Button href={CTA_HREF} size="lg">
              Train with me
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
