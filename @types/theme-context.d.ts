export type AvailableThemes = 'dark' | 'light';
export interface ThemeContextState {
  theme: AvailableThemes;
  setTheme: React.Dispatch<React.SetStateAction<AvailableThemes>>;
}
