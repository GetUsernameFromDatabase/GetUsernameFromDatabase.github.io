import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { useMainRoutesNavInfo } from '../../configuration/routes';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

// TODO: replace this with https://ui.shadcn.com/docs/components/dropdown-menu

const NavigationMobile = () => {
  const mainRoutesNavInfo = useMainRoutesNavInfo();
  return (
    <Menu as="div" className="relative inline-block text-left lg:hidden">
      <Menu.Button as={Fragment}>
        {({ open }) => (
          <Button
            id="theme-button"
            variant="secondary"
            className="rounded-full"
            size="icon"
          >
            {open ? <AiOutlineClose /> : <FaBars />}
          </Button>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="nav"
          className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-primary-foreground rounded-lg bg-primary-foreground shadow-lg"
        >
          {mainRoutesNavInfo.map((navInfo, index) => (
            <Menu.Item key={index}>
              <NavLink
                to={navInfo.to}
                className={({ isActive }) =>
                  cn(
                    'group flex w-full items-center rounded-sm bg-secondary px-2 py-2 text-sm text-primary hover:bg-primary hover:text-secondary',
                    { 'bg-primary/80 text-secondary': isActive },
                  )
                }
              >
                {navInfo.icon({ className: 'ml-1 mr-2' })}
                {navInfo.text}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavigationMobile;
