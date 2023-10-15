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
  // TODO: maybe add storing the value to local storage orsm
  const [theme, setTheme] = useState<ThemeContextState['theme']>(
    userPrefersDarkMode() ? 'dark' : 'light',
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
