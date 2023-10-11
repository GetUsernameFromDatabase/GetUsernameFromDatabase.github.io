// Layout.tsx
import { Outlet } from 'react-router-dom';
import MainMenu from '../components/MainMenu';

const Layout = () => {
  // TODO: refactor footer to be here, maybe even move top div of pages here
  return (
    <div className='col-span-12 lg:col-span-8 rounded-2xl'>
      <MainMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
