// Single icon system: lucide-react (Phase 0). The <Icon name=...> wrapper keeps
// call sites stable and pins size/stroke to the design tokens.
import {
  Award,
  GraduationCap,
  Medal,
  Trophy,
  Users,
  Dumbbell,
  GitMerge,
  Monitor,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "award"
  | "cap"
  | "medal"
  | "trophy"
  | "users"
  | "dumbbell"
  | "merge"
  | "monitor"
  | "check"
  | "x"
  | "chevron"
  | "arrow";

const map: Record<IconName, LucideIcon> = {
  award: Award,
  cap: GraduationCap,
  medal: Medal,
  trophy: Trophy,
  users: Users,
  dumbbell: Dumbbell,
  merge: GitMerge,
  monitor: Monitor,
  check: Check,
  x: X,
  chevron: ChevronDown,
  arrow: ArrowRight,
};

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp size={size} strokeWidth={1.75} className={className} aria-hidden />;
}
