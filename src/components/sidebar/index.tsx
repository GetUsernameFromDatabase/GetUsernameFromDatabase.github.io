import { useTranslation } from 'react-i18next';

import SidebarContactInfo from './sidebar-contact-info';
import SidebarCvDownload from './sidebar-cv-download';
import SidebarNameProffesion from './sidebar-person-info';
import SidebarSocialMedia from './sidebar-social-media';

import { contactItems, personalInfo, socialMediaLinks } from '@/data/personal';
import { capitalizeWords } from '@/utils/string-manipulation';

interface SidebarProperties {
  id: string;
}

const Sidebar = ({ id }: SidebarProperties) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="col-span-12 lg:col-span-4">
      <div className="left-0 top-40 mt-10 rounded-2xl bg-background py-10  lg:sticky lg:mb-10">
        <SidebarNameProffesion
          avatarSrc={personalInfo.avatar}
          name={personalInfo.names.current}
          profession={capitalizeWords(t('work.positions.full-stack-developer'))}
        ></SidebarNameProffesion>
        <SidebarSocialMedia links={socialMediaLinks} />
        <SidebarContactInfo items={contactItems} />
        <SidebarCvDownload />
      </div>
    </section>
  );
};

export default Sidebar;
