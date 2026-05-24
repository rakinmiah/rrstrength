export const PRICING_EYEBROW = "Pricing";
export const PRICING_HEADLINE = "No hidden prices. Ever.";
export const PRICING_MICROCOPY =
  "£60/hour is a single session; blocks are discounted packages."; // confirm (Phase 11)

export type Tier = {
  id: string;
  name: string;
  price: string;
  period: string;
  blurb: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "online",
    name: "Online",
    price: "£120",
    period: "/month",
    blurb: "A bespoke programme, video form checks and 24/7 contact.",
  },
  {
    id: "hybrid",
    name: "Hybrid",
    price: "£140",
    period: "/month",
    blurb: "In-person sessions plus a programme you run between them.",
    featured: true,
  },
  {
    id: "in-person",
    name: "In-Person",
    price: "£60",
    period: "/hour",
    blurb: "One-to-one coaching at PureGym Burgess Hill.",
  },
];

export type Bundle = { sessions: number; total: string; each: string };
export const bundles: Bundle[] = [
  { sessions: 5, total: "£280", each: "£56 each" },
  { sessions: 10, total: "£520", each: "£52 each" },
  { sessions: 15, total: "£705", each: "£47 each" },
];

// Comparison matrix — order: In-Person, Online, Hybrid
export const compareColumns = ["In-Person", "Online", "Hybrid"] as const;
export type Cell = string; // "✓" | "✗" | text
export type CompareRow = { feature: string; cells: [Cell, Cell, Cell] };

export const compareRows: CompareRow[] = [
  { feature: "1-to-1 in-person sessions", cells: ["1–5 / week", "None", "1–3 / week"] },
  { feature: "Tailored programme", cells: ["✓", "✓", "✓"] },
  { feature: "Nutritional guidance", cells: ["✓", "✓", "✓"] },
  { feature: "In-person form support", cells: ["✓", "✗", "✓"] },
  { feature: "Online form support", cells: ["✓", "✓", "✓"] },
  { feature: "24/7 contact", cells: ["✓", "✓", "✓"] },
  { feature: "Weekly check-ins", cells: ["✓", "✓", "✓"] },
];
