import { LucideIcon } from "lucide-react";

export type Section = {
  name: string;
  link: string;
};

export type HeroStats = {
  stat: string;
  for: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};
