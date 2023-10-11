import { personalInfo } from '../../info';
import SidebarSocialMedia from './sidebar-social-media';
import SidebarContactInfo from './sidebar-contact-info';
import SidebarCvDownload from './sidebar-cv-download';

const Sidebar = () => {
  return (
    <div className='Home_info col-span-12 lg:col-span-4'>
      <div className='bg-slate-100 dark:bg-[#111111] rounded-2xl mt-10 lg:mb-10 py-10 md:sticky top-40 left-0'>
        <div className='overflow-hidden rounded-lg -mt-48 text-center w-60 h-60 m-auto'>
          <img
            src='https://avatars.githubusercontent.com/u/49920260?v=4'
            alt='Profile'
          />
        </div>
        <div className='text-center'>
          <h2 className='mt-6 mb-1 text-4xl font-semibold dark:text-white'>
            {personalInfo.name}
          </h2>
          <h1 className='mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]'>
            {personalInfo.profession}
          </h1>
        </div>

        <SidebarSocialMedia />
        <SidebarContactInfo />
        <SidebarCvDownload />
      </div>
    </div>
  );
};

export default Sidebar;
