import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs';

import useTheme from '../hooks/use-theme';

import NavigationMobile from './navigation/navigation-mobile';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="z-50 bg-gray-900 py-5 dark:bg-black max-lg:sticky  max-lg:top-0 lg:bg-transparent lg:py-12">
      <div className="container grid grid-cols-[auto_1fr] items-center justify-between">
        <div>
          <a href="/">
            <img src="/images/logo.png" alt=" website logo" />
          </a>
        </div>
        <div className="flex items-center justify-end gap-3 text-right">
          <button
            onClick={toggleTheme}
            className="darkmode inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-2xl hover:bg-primary hover:text-slate-50"
          >
            {theme ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
          </button>
          <NavigationMobile></NavigationMobile>
        </div>
      </div>
    </header>
  );
};

export default Header;
