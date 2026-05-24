import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/navigation";
import {
  nextEvent,
  EVENTS_EYEBROW,
  EVENTS_NOEVENT_HEADLINE,
  EVENTS_NOEVENT_BODY,
} from "@/content/nextEvent";

export function Events() {
  return (
    <SectionShell id="events" tone="surface" aria-labelledby="events-h">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image (right on desktop, top on mobile) */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-line lg:order-2">
          <Image
            src="/images/charity.jpg"
            alt="A lifter completing a heavy deadlift on stage at the RR Strength Ramadan Rumble charity event"
            fill
            sizes="(max-width: 1024px) 92vw, 580px"
            className="object-cover"
            style={{ objectPosition: "50% 38%" }}
          />
        </div>

        {/* Text box (left on desktop) */}
        <div className="rounded-lg border border-line bg-surface-raised p-7 lg:order-1 lg:p-9">
          <Eyebrow>{EVENTS_EYEBROW}</Eyebrow>
          {nextEvent ? (
            <>
              <h2
                id="events-h"
                className="mt-3 font-display text-h2 font-bold uppercase text-fg"
              >
                The next RR Strength event
              </h2>
              <p className="mt-3 text-[15px] text-muted">
                <time dateTime={nextEvent.date}>{nextEvent.dateLabel}</time> ·{" "}
                {nextEvent.title}
              </p>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">
                {nextEvent.cause}
              </p>
              <div className="mt-7">
                <Button
                  href={nextEvent.signupUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign up to this event
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2
                id="events-h"
                className="mt-3 font-display text-h2 font-bold uppercase text-fg"
              >
                {EVENTS_NOEVENT_HEADLINE}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">
                {EVENTS_NOEVENT_BODY}
              </p>
              <div className="mt-7">
                <Button
                  href={contact.instagram}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow {contact.instagramHandle} for the next one
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
