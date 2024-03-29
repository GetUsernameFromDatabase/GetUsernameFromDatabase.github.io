import { useTranslation } from 'react-i18next';
import { BiSolidContact } from 'react-icons/bi';
import { BsFileTextFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { FaBlogger, FaHive } from 'react-icons/fa';
import type { RouteProps } from 'react-router-dom';

import AboutPage from '../pages/about-page';
import BlogPage from '../pages/blog-page';
import ContactPage from '../pages/contact-page';
import NoPage from '../pages/no-page';
import ResumePage from '../pages/resume-page';
import WorkPage from '../pages/work-page';

/**
 * Connected to {@link mainRoutesNavInfo}
 */
export const mainRoutes: Readonly<RouteProps[]> = [
  { path: '/', index: true, element: <AboutPage /> },
  { path: '/resume', element: <ResumePage /> },
  { path: '/works', element: <WorkPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NoPage /> },
];

/**
 * Connected to {@link mainRoutes}
 */
export const useMainRoutesNavInfo = () => {
  const { t } = useTranslation();

  return [
    { to: '/', text: t('about-me.title'), icon: BsFillHouseDoorFill },
    { to: '/resume', text: t('resume-page.title'), icon: BsFileTextFill },
    { to: '/works', text: t('work-page.title'), icon: FaHive },
    { to: '/blog', text: t('blog-page.title'), icon: FaBlogger },
    { to: '/contact', text: t('contact-page.title'), icon: BiSolidContact },
  ];
};
