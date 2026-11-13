import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  subTitle?: string;
  text: string;
}

export interface SkillCardGridProps {
  title: string;
  imageSrc?: string;
  cards: SkillCard[];
  collapsible?: boolean;
  centeredCards?: boolean;
}

export interface SkillCard {
  icon: LucideIcon;
  title: string;
  imageSrc?: string;
  skillsets?: string[];
  TechStack?: string[];
  text?: string | string[];
}
