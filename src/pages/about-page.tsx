import { BiServer } from 'react-icons/bi';
import { BsCodeSlash, BsFiletypeSql, BsFillPhoneFill } from 'react-icons/bs';
import { FaCogs, FaGamepad } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

import type { AboutCardProperties } from '../components/about/about-card';
import AboutGrid from '../components/about/about-grid';
import ProgrammingLanguageSlider from '../components/programming-language-slider';

// TODO: %2 amount of AboutCardProperties
const aboutInfo: AboutCardProperties[] = [
  {
    title: 'Ui/Ux Design',
    icon: MdDesignServices,
    iconClassName: 'text-blue-600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },
  {
    title: 'App Development',
    icon: BsFillPhoneFill,
    iconClassName: 'text-green-600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },

  {
    title: 'Web Development',
    icon: BsCodeSlash,
    iconClassName: 'text-purple-600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },
  {
    title: 'Database',
    icon: BsFiletypeSql,
    iconClassName: 'text-indigo-600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },
  {
    title: 'Server',
    icon: BiServer,
    iconClassName: 'text-red-600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },
  {
    title: 'Game',
    icon: FaGamepad,
    iconClassName: 'text-cyan-800',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },
  {
    title: 'Management',
    icon: FaCogs,
    iconClassName: 'text-orange-600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  },
];

const aboutMe = [
  "In today's world, there is no limit to what one can learn. With the vast amount of information available, it is possible to find answers to almost any question or to draw conclusions based on the available data.",
  "However, the key to success lies not only in acquiring knowledge but also in refining one's thought process. The better one becomes at learning, the more knowledge they can amass. By focusing on developing our ability to learn, we can unlock our full potential and achieve great things.",
];

const AboutPage = () => {
  return (
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] relative -translate-y-1/2 font-roboto-slab text-4xl font-bold text-slate-900 after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary dark:text-slate-50">
          About Me
        </h2>
        <div className="space-y-2">
          {aboutMe.map((item, index) => (
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
        What I do!
      </h3>
      <AboutGrid items={aboutInfo}></AboutGrid>
      <div>
        <h3 className="pb-4 pt-6 text-4xl font-semibold text-slate-900 dark:text-slate-50">
          Languages/Frameworks
        </h3>
        <ProgrammingLanguageSlider></ProgrammingLanguageSlider>
      </div>
    </div>
  );
};

export default AboutPage;
