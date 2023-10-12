// Layout.tsx
import { Outlet } from 'react-router-dom';
import MainMenu from '../components/main-menu';
import Footer from '../components/footer';

const Layout = () => {
  return (
    <div className='col-span-12 lg:col-span-8 rounded-2xl'>
      <MainMenu />
      <div className='bg-slate-50 dark:bg-[#111111] rounded-xl mb-14'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
