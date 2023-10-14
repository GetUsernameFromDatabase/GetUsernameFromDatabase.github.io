import { contactItems, personalInfo, socialMediaLinks } from '../../info';

import SidebarContactInfo from './sidebar-contact-info';
import SidebarCvDownload from './sidebar-cv-download';
import SidebarNameProffesion from './sidebar-person-info';
import SidebarSocialMedia from './sidebar-social-media';

interface SidebarProperties {
  id: string;
}

const Sidebar = ({ id }: SidebarProperties) => {
  return (
    <section id={id} className="col-span-12 lg:col-span-4">
      <div className="left-0 top-40 mt-10 rounded-2xl bg-slate-100 py-10 dark:bg-[#111111] md:sticky lg:mb-10">
        <SidebarNameProffesion
          avatarSrc={personalInfo.avatar}
          name={personalInfo.name}
          profession={personalInfo.profession}
        ></SidebarNameProffesion>
        <SidebarSocialMedia links={socialMediaLinks} />
        <SidebarContactInfo items={contactItems} />
        <SidebarCvDownload />
      </div>
    </section>
  );
};

export default Sidebar;
