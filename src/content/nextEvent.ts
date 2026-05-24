export type RREvent = {
  date: string; // ISO, e.g. "2026-08-10"
  dateLabel: string; // human, e.g. "Saturday 10th August"
  title: string;
  cause: string;
  signupUrl: string;
};

export const EVENTS_EYEBROW = "Community & Charity";

// Set to a RREvent object when an event is scheduled; null renders the
// evergreen community state so a stale date never shows (Phase 11).
export const nextEvent: RREvent | null = null;

// No-event (evergreen) copy
export const EVENTS_NOEVENT_HEADLINE = "We lift for more than ourselves.";
export const EVENTS_NOEVENT_BODY =
  "RR Strength runs charity powerlifting meets that raise money for children in Palestine — run entirely by volunteers. The next one will be announced here.";
