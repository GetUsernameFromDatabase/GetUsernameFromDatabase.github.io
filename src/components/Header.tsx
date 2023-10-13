import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

import useTheme from '../hooks/use-theme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-gray-900 py-5 dark:bg-black lg:bg-transparent lg:py-12">
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
          <button
            onClick={handleMenu}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-2xl text-slate-50 lg:hidden"
          >
            {menu ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
