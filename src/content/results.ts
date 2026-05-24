export type Testimonial = {
  name: string;
  quote: string | null; // AWAITING_USER — never fabricated
};

export const RESULTS_EYEBROW = "The proof";
export const RESULTS_HEADLINE = "Real results, real lives changed.";
export const RESULTS_MICROCOPY = "Photos shared with each client's permission.";

// Featured transformation — stat AWAITING_USER (real figure required).
export const featuredResult = {
  stat: null as string | null,
  name: "Client transformation",
  // Image pair pending consent (Phase 11). Until then, placeholder blocks render.
  consented: false,
};

export const testimonials: Testimonial[] = [
  { name: "Chell", quote: null },
  { name: "Lena", quote: null },
  { name: "Luke", quote: null },
  { name: "Katy", quote: null },
];
