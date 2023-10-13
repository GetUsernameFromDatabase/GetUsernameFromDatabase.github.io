import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', text: 'About Me', icon: 'fa-solid fa-house' },
  { to: '/resume', text: 'Resume', icon: 'fa-regular fa-file-lines' },
  { to: '/works', text: 'Works', icon: 'fa-brands fa-hive' },
  { to: '/blog', text: 'Blogs', icon: 'fa-brands fa-blogger' },
  { to: '/contact', text: 'Contact', icon: 'fa-regular fa-address-book' },
];

const MainMenu = () => {
  return (
    <div className="-mt-10 hidden text-right lg:block">
      <ul className="menu gap-4 rounded-3xl bg-slate-50 px-10 py-6 dark:bg-black md:inline-flex">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <NavLink
              to={menuItem.to}
              className={({ isActive }) =>
                `text-1xl hover:hover_active flex w-20 flex-col items-center justify-center rounded-xl bg-light-gray py-4 text-slate-900 hover:text-slate-50 dark:bg-mid-dark dark:text-slate-100 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              <i className={menuItem.icon}></i>
              {menuItem.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
