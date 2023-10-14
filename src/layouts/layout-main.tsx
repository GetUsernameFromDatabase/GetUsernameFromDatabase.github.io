// Layout.tsx
import { Outlet } from 'react-router-dom';

import Footer from '../components/footer';
import NavigationMain from '../components/navigation/navigation-main';

const LayoutMain = () => {
  return (
    <div className="col-span-12 rounded-2xl lg:col-span-8">
      <div id="large-nav" className="-mt-10 hidden text-right lg:block">
        <NavigationMain></NavigationMain>
      </div>
      <div className="mb-14 rounded-xl bg-slate-50 dark:bg-[#111111]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LayoutMain;
