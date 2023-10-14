// Layout.tsx
import { Outlet } from 'react-router-dom';

import Footer from '../components/footer';
import MainMenu from '../components/main-menu';

const LayoutMain = () => {
  return (
    <div className="col-span-12 rounded-2xl lg:col-span-8">
      <MainMenu />
      <div className="mb-14 rounded-xl bg-slate-50 dark:bg-[#111111]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LayoutMain;
