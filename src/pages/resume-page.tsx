import { useTranslation } from 'react-i18next';

import ResumeItem, {
  type ResumeItemProperties,
} from '../components/resume/resume-item';
import ResumeKnowledgeItem from '../components/resume/resume-knowledge-item';
import ResumeSkillItem from '../components/resume/resume-skill-item';

const educationData: ResumeItemProperties[] = [
  {
    date: '2021-2023',
    title: 'Ph.D in Horriblensess',
    institution: 'ABC University, Los Angeles, CA',
    className: 'bg-yellow-100 dark:bg-yellow-700',
  },
  {
    date: '2019 - Present',
    title: 'Sr. Software Tester',
    institution: 'Google Inc.',
    className: 'bg-rose-100 dark:bg-rose-700',
  },
  {
    date: '2021',
    title: 'Best Developer',
    institution: 'University Of Melbourne, NA',
    className: 'bg-indigo-100 dark:bg-indigo-700',
  },
];

const experienceData = [
  {
    date: '2017-2021',
    title: 'Computer Science',
    institution: 'Imperialize Technical Institute',
    className: 'bg-cyan-100 dark:bg-cyan-700',
  },
  {
    date: '2015-2017',
    title: 'Cr. Web Developer',
    institution: 'SadInc Hours',
    className: 'bg-pink-100 dark:bg-pink-700',
  },
  {
    date: '2008',
    title: 'Best Writer',
    institution: 'Online Typodev Solution Ltd.',
    className: 'bg-green-100 dark:bg-green-700',
  },
] as const;

// TODO: would like to bypass tailwind limitation percentage
// Maybe parse the width from after:w-[]?
const skillData = [
  {
    label: 'Web Design',
    percentage: 80,
    className: 'after:bg-red-400 after:w-[80%]',
  },
  {
    label: 'Mobile App',
    percentage: 95,
    className: 'after:bg-yellow-400 after:w-[95%]',
  },
  {
    label: 'Illustrator',
    percentage: 66,
    className: 'after:bg-cyan-400 after:w-[66%]',
  },
  {
    label: 'Photoshop',
    percentage: 75,
    className: 'after:bg-purple-400 after:w-[75%]',
  },
] as const;

const knowledgeLabels = [
  'Digital Design',
  'Marketing',
  'Social Media',
  'Print',
  'Time Management',
  'Flexibility',
] as const;

const ResumePage = () => {
  const sectionStyles = 'text-3xl dark:text-white font-medium pb-6';
  const { t } = useTranslation();

  return (
    <div className="mt-8 px-12 pt-16">
      <h2 className="after:contents[] font-roboto-slab relative -translate-y-1/2 text-4xl font-bold text-primary after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary">
        {t('resume-page.title')}
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h3 className={sectionStyles}>{t('resume-page.experience')}</h3>
          <div className="grid grid-cols-1 gap-6">
            {experienceData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className={sectionStyles}>{t('resume-page.education')}</h3>
          <div className="grid grid-cols-1 gap-6">
            {educationData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-2 lg:pt-12">
        <div>
          <h3 className="pb-8 text-3xl font-medium dark:text-white">
            {t('resume-page.working-skills')}
          </h3>
          <div className="skill_items rounded-md bg-primary-foreground">
            {skillData.map((item, index) => (
              <ResumeSkillItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="pb-8 text-3xl font-medium dark:text-white">
            {t('resume-page.knowledges')}
          </h3>
          <div className="flex flex-wrap gap-4">
            {knowledgeLabels.map((label, index) => (
              <ResumeKnowledgeItem key={index} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
