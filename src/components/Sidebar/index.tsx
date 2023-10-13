import { personalInfo } from '../../info';

import SidebarContactInfo from './sidebar-contact-info';
import SidebarCvDownload from './sidebar-cv-download';
import SidebarSocialMedia from './sidebar-social-media';

const Sidebar = () => {
  return (
    <aside className="Home_info col-span-12 lg:col-span-4">
      <div className="left-0 top-40 mt-10 rounded-2xl bg-slate-100 py-10 dark:bg-[#111111] md:sticky lg:mb-10">
        <div className="m-auto -mt-48 h-60 w-60 overflow-hidden rounded-lg text-center">
          <img
            src="https://avatars.githubusercontent.com/u/49920260?v=4"
            alt="Profile"
          />
        </div>
        <div className="text-center">
          <h2 className="mb-1 mt-6 text-4xl font-semibold dark:text-white">
            {personalInfo.name}
          </h2>
          <h1 className="mb-4 inline-block rounded-lg px-5 py-1.5 text-[#7B7B7B] dark:bg-[#1D1D1D] dark:text-[#A6A6A6]">
            {personalInfo.profession}
          </h1>
        </div>

        <SidebarSocialMedia />
        <SidebarContactInfo />
        <SidebarCvDownload />
      </div>
    </aside>
  );
};

export default Sidebar;
