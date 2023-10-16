/* eslint-disable security/detect-object-injection */
import { FaMoon, FaSun } from 'react-icons/fa';

import { Button } from '../ui/button';

import { useThemeContext } from '@/contexts/theme/theme-context-hook';
import type { AvailableThemes } from '@type/my-types';

const themeChooseIcons: Record<AvailableThemes, JSX.Element> = {
  dark: <FaSun className="text-amber-500" />,
  light: <FaMoon className="text-[#132c3c]" />,
};

const ThemeChanger = () => {
  const { theme, setTheme } = useThemeContext();
  function toggleTheme() {
    setTheme((previousValue) => (previousValue === 'dark' ? 'light' : 'dark'));
  }

  return (
    <Button
      id="theme-button"
      onClick={toggleTheme}
      variant="secondary"
      className="rounded-full"
      size="icon"
    >
      {themeChooseIcons[theme]}
    </Button>
  );
};

export default ThemeChanger;
