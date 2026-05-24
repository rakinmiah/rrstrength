export type ServiceIcon = "dumbbell" | "merge" | "monitor";

export type Service = {
  id: string;
  icon: ServiceIcon;
  title: string;
  blurb: string;
  bullets: string[];
  featured?: boolean;
};

export const SERVICES_EYEBROW = "How we'll work together";
export const SERVICES_HEADLINE = "Three ways to train. One standard.";

const bullets = [
  "Strength & powerlifting",
  "Fat loss & conditioning",
  "Tailored to you",
];

export const services: Service[] = [
  {
    id: "in-person",
    icon: "dumbbell",
    title: "In-Person",
    blurb:
      "At PureGym Burgess Hill. Hands-on coaching and real-time form work, session by session.",
    bullets,
  },
  {
    id: "hybrid",
    icon: "merge",
    title: "Hybrid",
    blurb:
      "The best of both — in-person sessions plus a programme you run between them.",
    bullets,
    featured: true,
  },
  {
    id: "online",
    icon: "monitor",
    title: "Online",
    blurb:
      "Train anywhere. A bespoke programme with video form checks and 24/7 contact.",
    bullets,
  },
];
