import LanguageSwitcher from './navigation/language-switcher';
import NavigationMobile from './navigation/navigation-mobile';
import ThemeChanger from './theme/theme-changer';

const Header = () => {
  return (
    /** -top-1 is to mitigate fast scroll issue on mobile */
    <header className="-top-1 z-50 m-0 bg-background py-5 max-lg:sticky lg:py-6">
      <div className="container grid grid-cols-[auto_1fr] items-center justify-between">
        <div>
          <a href="/">
            <img src="/images/logo.png" alt=" website logo" />
          </a>
        </div>
        <div className="flex items-center justify-end gap-3 text-right">
          <LanguageSwitcher></LanguageSwitcher>
          <ThemeChanger></ThemeChanger>
          <NavigationMobile></NavigationMobile>
        </div>
      </div>
    </header>
  );
};

export default Header;
