/* eslint-disable security/detect-object-injection */
import { FaMoon, FaSun } from 'react-icons/fa';

import type { AvailableThemes } from '../../@types/theme-context';
import { useThemeContext } from '../contexts/theme/theme-context-hook';

import NavigationMobile from './navigation/navigation-mobile';

const themeChooseIcons: Record<AvailableThemes, JSX.Element> = {
  dark: <FaSun className="text-amber-500" />,
  light: <FaMoon className="text-[#132c3c]" />,
};
const Header = () => {
  const { theme, setTheme } = useThemeContext();
  function toggleTheme() {
    setTheme((previousValue) => (previousValue === 'dark' ? 'light' : 'dark'));
  }

  return (
    /** -top-1 is to mitigate fast scroll issue on mobile */
    <header className="-top-1 z-50 m-0 bg-gray-900 py-5 dark:bg-black max-lg:sticky lg:bg-transparent lg:py-12">
      <div className="container grid grid-cols-[auto_1fr] items-center justify-between">
        <div>
          <a href="/">
            <img src="/images/logo.png" alt=" website logo" />
          </a>
        </div>
        <div className="flex items-center justify-end gap-3 text-right">
          <button
            id="theme-button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-2xl hover:bg-primary hover:text-slate-50 dark:bg-mid-dark"
          >
            {themeChooseIcons[theme]}
          </button>
          <NavigationMobile></NavigationMobile>
        </div>
      </div>
    </header>
  );
};

export default Header;
