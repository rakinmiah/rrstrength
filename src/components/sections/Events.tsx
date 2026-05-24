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
  const headline = nextEvent
    ? "The next RR Strength event"
    : EVENTS_NOEVENT_HEADLINE;

  return (
    <SectionShell id="events" tone="surface" aria-labelledby="events-h">
      {/* Header — above the image on mobile only */}
      <div className="mb-8 lg:hidden">
        <Eyebrow>{EVENTS_EYEBROW}</Eyebrow>
        <h2 className="mt-3 font-display text-h2 font-bold uppercase text-fg">
          {headline}
        </h2>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image (right on desktop, between header and card on mobile) */}
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

        {/* Text (left on desktop) */}
        <div className="lg:order-1">
          {/* Header — desktop only (mobile header is above the image) */}
          <div className="hidden lg:block">
            <Eyebrow>{EVENTS_EYEBROW}</Eyebrow>
            <h2
              id="events-h"
              className="mt-3 font-display text-h3 font-bold uppercase text-fg"
            >
              {headline}
            </h2>
          </div>

          {nextEvent ? (
            <>
              <p className="text-[15px] text-muted lg:mt-2">
                <time dateTime={nextEvent.date}>{nextEvent.dateLabel}</time> ·{" "}
                {nextEvent.title}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {nextEvent.cause}
              </p>
              <div className="mt-6">
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
              <p className="text-[17px] leading-relaxed text-muted lg:mt-4">
                {EVENTS_NOEVENT_BODY}
              </p>
              <div className="mt-6">
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
