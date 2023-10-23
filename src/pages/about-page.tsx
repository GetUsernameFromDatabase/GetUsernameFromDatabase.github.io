import { useTranslation } from 'react-i18next';
import { BiServer } from 'react-icons/bi';
import { BsCodeSlash, BsFillPhoneFill } from 'react-icons/bs';
import { FaCogs, FaDatabase, FaTools } from 'react-icons/fa';

import type { AboutCardProperties } from '@/components/about/about-card';
import AboutGrid from '@/components/about/about-grid';
import ProgrammingLanguageSlider from '@/components/about/programming-language-slider';
import PageSection from '@/components/page/page-section';
import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

const AboutPage = () => {
  const { t } = useTranslation();
  const aboutInfo: AboutCardProperties[] = [
    {
      title: t('about-me.what-i-do.front-end.title'),
      icon: BsCodeSlash,
      iconClassName: 'text-blue-600',
      description: t('about-me.what-i-do.front-end.description', {
        joinArrays: ' ',
      }),
    },
    {
      title: t('about-me.what-i-do.back-end.title'),
      icon: FaCogs,
      iconClassName: 'text-green-600',
      description: t('about-me.what-i-do.back-end.description', {
        joinArrays: ' ',
      }),
    },
    {
      title: t('about-me.what-i-do.database.title'),
      icon: FaDatabase,
      iconClassName: 'text-indigo-600',
      description: t('about-me.what-i-do.database.description', {
        joinArrays: ' ',
      }),
    },
    {
      title: t('about-me.what-i-do.dev-ops.title'),
      icon: FaTools,
      iconClassName: 'text-purple-600',
      description: t('about-me.what-i-do.dev-ops.description', {
        joinArrays: '. ',
      }),
    },
    {
      title: t('about-me.what-i-do.server-management.title'),
      icon: BiServer,
      iconClassName: 'text-red-600',
      description: t('about-me.what-i-do.server-management.description', {
        joinArrays: ' ',
      }),
    },
    {
      title: t('about-me.what-i-do.mobile-development.title'),
      icon: BsFillPhoneFill,
      iconClassName: 'text-purple-600',
      description: t('about-me.what-i-do.mobile-development.description', {
        joinArrays: ' ',
      }),
    },
  ];
  return (
    <PageWrapper title={capitalizeWords(t('about-me.title'))}>
      <div>
        <div className="space-y-2">
          {t('about-me.content', { returnObjects: true }).map((item, index) => (
            <p key={index} className="font-medium leading-7 text-primary/80">
              {item}
            </p>
          ))}
        </div>
      </div>
      <PageSection title={t('about-me.what-i-do.title')} rootClassName="pt-6">
        <AboutGrid items={aboutInfo}></AboutGrid>
      </PageSection>
      <PageSection
        title={t('about-me.languages-frameworks')}
        rootClassName="pt-6"
      >
        <ProgrammingLanguageSlider></ProgrammingLanguageSlider>
      </PageSection>
    </PageWrapper>
  );
};

export default AboutPage;
