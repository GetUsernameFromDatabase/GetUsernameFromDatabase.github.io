import { createContext, useContext } from 'react';

import type { ThemeContextState } from '../../../@types/theme-context';

export const ThemeContext = createContext<ThemeContextState | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context!;
};
