import { NavLink } from 'react-router-dom';

import { mainRoutesNavInfo } from '../configuration/routes';
import { cn } from '../utils/classname-resolver';

const MainMenu = () => {
  // TODO: fix MainMenu no shown when small screen view (mobile navigation)
  return (
    <div className="-mt-10 hidden text-right lg:block">
      <ul className="menu gap-4 rounded-3xl bg-slate-50 px-10 py-6 dark:bg-black md:inline-flex">
        {mainRoutesNavInfo.map((navInfo, index) => (
          <li key={index}>
            <NavLink
              to={navInfo.to}
              className={({ isActive }) =>
                cn(
                  'text-1xl hover:hover_active flex w-20 flex-col items-center justify-center rounded-xl bg-light-gray py-4 text-slate-900 hover:text-slate-50 dark:bg-mid-dark dark:text-slate-100',
                  { active: isActive },
                )
              }
            >
              {navInfo.icon()}
              {navInfo.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
