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
    <div className='text-right -mt-10 hidden lg:block'>
      <ul className='md:inline-flex gap-4 py-6 px-10 rounded-3xl bg-slate-50 dark:bg-black menu'>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <NavLink
              to={menuItem.to}
              className={({ isActive }) =>
                `text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl flex items-center flex-col justify-center bg-light-gray dark:bg-mid-dark dark:text-slate-100 hover:hover_active ${
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
