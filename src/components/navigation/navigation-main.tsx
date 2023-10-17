import { NavLink } from 'react-router-dom';

import { useMainRoutesNavInfo } from '../../configuration/routes';

import { cn } from '@/lib/utils';

const NavigationMain = () => {
  const mainRoutesNavInfo = useMainRoutesNavInfo();
  return (
    <nav className="menu gap-4 rounded-3xl bg-background p-6 md:inline-flex">
      {mainRoutesNavInfo.map((navInfo, index) => (
        <NavLink
          key={index}
          to={navInfo.to}
          className={({ isActive }) =>
            cn(
              'text-1xl flex w-20 flex-col items-center justify-center rounded-xl bg-secondary py-4 text-center text-primary hover:bg-primary hover:text-secondary',
              { 'bg-primary/80 text-secondary': isActive },
            )
          }
        >
          {navInfo.icon()}
          {navInfo.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationMain;
