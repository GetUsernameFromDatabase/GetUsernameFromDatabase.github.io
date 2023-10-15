import { useTranslation } from 'react-i18next';
import { BiServer } from 'react-icons/bi';
import { BsCodeSlash, BsFillPhoneFill } from 'react-icons/bs';
import { FaCogs, FaDatabase, FaTools } from 'react-icons/fa';

import type { AboutCardProperties } from '../components/about/about-card';
import AboutGrid from '../components/about/about-grid';
import ProgrammingLanguageSlider from '../components/programming-language-slider';
import { capitalizeWords } from '../utils/string-manipulation';

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
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] relative -translate-y-1/2 font-roboto-slab text-4xl font-bold text-slate-900 after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary dark:text-slate-50">
          {capitalizeWords(t('about-me.title'))}
        </h2>
        <div className="space-y-2">
          {t('about-me.content', { returnObjects: true }).map((item, index) => (
            <p
              key={index}
              className="font-medium leading-7 text-gray-700 dark:text-slate-400"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <h3 className="pb-4 pt-6 text-4xl font-semibold text-slate-900 dark:text-slate-50">
        {t('about-me.what-i-do.title')}
      </h3>
      <AboutGrid items={aboutInfo}></AboutGrid>
      <div>
        <h3 className="pb-4 pt-6 text-4xl font-semibold text-slate-900 dark:text-slate-50">
          {t('about-me.languages-frameworks')}
        </h3>
        <ProgrammingLanguageSlider></ProgrammingLanguageSlider>
      </div>
    </div>
  );
};

export default AboutPage;
