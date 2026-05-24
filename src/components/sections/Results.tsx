"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CTA_HREF } from "@/content/navigation";
import { RESULTS_EYEBROW, RESULTS_HEADLINE } from "@/content/results";

type Client = {
  name: string;
  desktop: { src: string; w: number; h: number };
  mobile?: { src: string; w: number; h: number };
};

const clients: Client[] = [
  {
    name: "Katy",
    desktop: { src: "/images/progress/katy.png", w: 2139, h: 1000 },
    mobile: { src: "/images/progress/katy-mobile.png", w: 1001, h: 2009 },
  },
  {
    name: "Luke",
    desktop: { src: "/images/progress/luke.png", w: 2204, h: 1000 },
    mobile: { src: "/images/progress/luke-mobile.png", w: 1001, h: 2009 },
  },
  {
    name: "Chell",
    desktop: { src: "/images/progress/chell.png", w: 1805, h: 1000 },
    mobile: { src: "/images/progress/chell-mobile.png", w: 1001, h: 2009 },
  },
  {
    name: "Lena",
    desktop: { src: "/images/progress/lena.png", w: 1805, h: 1000 },
  },
  {
    name: "Soph",
    desktop: { src: "/images/transformation-front.jpg", w: 2048, h: 1147 },
  },
];

export function Results() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const client = clients[active];

  // Scroll-linked reveal: the image wipes open left→right behind a brick line
  // as the section moves through the viewport. Driven by scroll position
  // (not IntersectionObserver), so it always plays.
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });
  const inset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${inset}% 0 0)`;
  const dividerLeft = useTransform(inset, (v) => `${100 - v}%`);
  const dividerOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

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
          <motion.div
            ref={ref}
            role="tabpanel"
            aria-label={`${client.name}'s progress`}
            style={reduce ? undefined : { clipPath: clip }}
            className="relative overflow-hidden rounded-lg border border-line bg-surface-sunken"
          >
            {/* Crossfade the image on tab switch */}
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={client.desktop.src}
                alt={`${client.name}'s before and after progress with RR Strength`}
                width={client.desktop.w}
                height={client.desktop.h}
                sizes="(max-width: 640px) 92vw, 900px"
                className={`h-auto w-full ${client.mobile ? "hidden sm:block" : ""}`}
                {...(active === 0
                  ? { priority: true }
                  : { loading: "eager" as const })}
              />
              {client.mobile && (
                <Image
                  src={client.mobile.src}
                  alt={`${client.name}'s before and after progress with RR Strength`}
                  width={client.mobile.w}
                  height={client.mobile.h}
                  sizes="92vw"
                  className="h-auto w-full sm:hidden"
                  loading="eager"
                />
              )}
            </motion.div>

            {/* Brick line riding the reveal edge */}
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-y-0 z-10 w-[3px] bg-brick"
                style={{ left: dividerLeft, opacity: dividerOpacity }}
              />
            )}
          </motion.div>

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
