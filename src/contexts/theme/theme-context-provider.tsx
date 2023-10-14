import { useState } from 'react';

import type { ThemeContextState } from '../../../@types/theme-context';
import { userPrefersDarkMode } from '../../utils/browser-window';

import { ThemeContext } from './theme-context-hook';

interface ThemeContextProviderProperties {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProperties) => {
  const [theme, setTheme] = useState<ThemeContextState['theme']>(
    userPrefersDarkMode() ? 'dark' : 'light',
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
