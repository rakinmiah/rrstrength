"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CTA_HREF } from "@/content/navigation";
import { RESULTS_EYEBROW, RESULTS_HEADLINE } from "@/content/results";

type Client = { name: string; src: string };

const clients: Client[] = [
  { name: "Katy", src: "/images/progress/katy.jpg" },
  { name: "Luke", src: "/images/progress/luke.jpg" },
  { name: "Chell", src: "/images/progress/chell.jpg" },
  { name: "Lena", src: "/images/progress/lena.jpg" },
  { name: "Soph", src: "/images/progress/soph-front.jpg" },
];

// Shared frame: fixed aspect ratio + object-contain → every client renders at
// the SAME height, so switching tabs never shifts the layout.
const FRAME =
  "relative aspect-video w-full overflow-hidden rounded-lg border border-line bg-surface-sunken";
const SIZES = "(max-width: 640px) 92vw, 900px";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function StaticFrame({ client }: { client: Client }) {
  return (
    <div className={FRAME}>
      <Image
        src={client.src}
        alt={`${client.name}'s before and after progress with RR Strength`}
        fill
        sizes={SIZES}
        className="object-contain"
        loading="eager"
      />
    </div>
  );
}

// Desktop only — scroll-linked wipe with the brick divider.
function AnimatedFrame({ client }: { client: Client }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });
  const inset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${inset}% 0 0)`;
  const dividerLeft = useTransform(inset, (v) => `${100 - v}%`);
  const dividerOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  return (
    <div ref={ref} className={FRAME}>
      <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
        <Image
          src={client.src}
          alt={`${client.name}'s before and after progress with RR Strength`}
          fill
          sizes={SIZES}
          className="object-contain"
          loading="eager"
        />
      </motion.div>
      <motion.span
        aria-hidden
        className="absolute inset-y-0 z-10 w-[3px] bg-brick"
        style={{ left: dividerLeft, opacity: dividerOpacity }}
      />
    </div>
  );
}

export function Results() {
  const [active, setActive] = useState(0);
  const isDesktop = useIsDesktop();
  const client = clients[active];

  function onTabKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % clients.length);
    if (e.key === "ArrowLeft")
      setActive((i) => (i - 1 + clients.length) % clients.length);
  }

  return (
    <SectionShell id="results" tone="surface" aria-labelledby="results-h">
      <div className="mx-auto max-w-[960px] text-center">
        <Eyebrow className="mx-auto">{RESULTS_EYEBROW}</Eyebrow>
        <h2
          id="results-h"
          className="mt-3 font-display text-h2 font-bold uppercase text-fg"
        >
          {RESULTS_HEADLINE}
        </h2>

        <div className="mt-9">
          <div
            role="tabpanel"
            aria-label={`${client.name}'s progress`}
          >
            {isDesktop ? (
              <AnimatedFrame key={active} client={client} />
            ) : (
              <StaticFrame client={client} />
            )}
          </div>

          {/* Name tabs — flick through clients */}
          <div
            role="tablist"
            aria-label="Client progress"
            onKeyDown={onTabKey}
            className="mt-5 flex flex-wrap justify-center gap-2"
          >
            {clients.map((c, i) => {
              const selected = i === active;
              return (
                <button
                  key={c.name}
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`rounded-pill border px-5 py-2 font-display text-h4 uppercase tracking-wide transition-colors ${
                    selected
                      ? "border-brick bg-brick text-white"
                      : "border-line text-muted hover:border-fg hover:text-fg"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <Button href={CTA_HREF} size="lg">
            Start your transformation
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
