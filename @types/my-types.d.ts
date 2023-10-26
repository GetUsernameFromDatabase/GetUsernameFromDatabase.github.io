import { ArrowDown } from 'lucide-react';
import type { IconType } from 'react-icons';

ArrowDown;
export interface SocialMediaLink {
  label: string;
  icon: IconType;
  className: string;
  link: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: IconType;
  className: string;
  link?: string;
}

export type AvailableThemes = 'dark' | 'light';
export interface ThemeContextState {
  theme: AvailableThemes;
  setTheme: React.Dispatch<React.SetStateAction<AvailableThemes>>;
}

export interface FacetFilterOptions {
  value: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
}
