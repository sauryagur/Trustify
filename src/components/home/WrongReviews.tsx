
import { Circle, Target, ShieldAlert, UserX, BotMessageSquare, AlertOctagon } from "lucide-react";

export interface WrongReviewItem {
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
}

export const wrongReviewData: WrongReviewItem[] = [
  {
    icon: Circle,
    title: "Fake Reviews",
    subtitle: "70% of online reviews are manipulated or completely fabricated."
  },
  {
    icon: Target,
    title: "Targeted Attacks",
    subtitle: "Competitors often sabotage businesses with false negative reviews."
  },
  {
    icon: ShieldAlert,
    title: "No Verification",
    subtitle: "Most platforms have no real proof of purchase verification."
  },
  {
    icon: UserX,
    title: "Anonymous Critics",
    subtitle: "Anonymous accounts can leave unlimited reviews without accountability."
  },
  {
    icon: BotMessageSquare,
    title: "Bot Networks",
    subtitle: "Automated bots can generate thousands of fake reviews in minutes."
  },
  {
    icon: AlertOctagon,
    title: "No Recourse",
    subtitle: "Businesses have limited options to challenge false reviews."
  }
];
