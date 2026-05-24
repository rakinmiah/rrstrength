export type Credential = { label: string; icon: IconKey };
export type IconKey =
  | "award"
  | "cap"
  | "medal"
  | "trophy"
  | "users"
  | "dumbbell";

// Every credential below is stated verbatim on rr-strength-3ba4f5.webflow.io.
export const credentials: Credential[] = [
  { label: "Level 3 Personal Trainer", icon: "award" },
  { label: "1st-Class BSc Sport & Exercise Science", icon: "cap" },
  { label: "Junior Nationals podium, 2018", icon: "medal" },
  { label: "8 years' training experience", icon: "dumbbell" },
  { label: "40+ clients coached", icon: "users" },
];

export const TRUST_KICKER = "The proof, before the pitch";
