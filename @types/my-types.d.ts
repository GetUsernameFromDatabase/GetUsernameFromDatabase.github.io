import type { IconType } from 'react-icons';

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
