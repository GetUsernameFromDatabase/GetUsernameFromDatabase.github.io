import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { useMainRoutesNavInfo } from '../../configuration/routes';
import { cn } from '../../utils/classname-resolver';

const NavigationMobile = () => {
  const mainRoutesNavInfo = useMainRoutesNavInfo();
  return (
    <nav className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-2xl text-slate-50 lg:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-2xl text-slate-50 lg:hidden">
          {({ open }) => (open ? <AiOutlineClose /> : <FaBars />)}
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-mid-dark dark:bg-black">
            {mainRoutesNavInfo.map((navInfo, index) => (
              <Menu.Item key={index}>
                <NavLink
                  to={navInfo.to}
                  className={({ isActive }) =>
                    cn(
                      'hover:hover_active group flex w-full items-center rounded-md bg-light-gray px-2 py-2  text-sm  text-slate-900 hover:text-slate-50 dark:bg-mid-dark dark:text-slate-100',
                      { active: isActive },
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
    </nav>
  );
};

export default NavigationMobile;
