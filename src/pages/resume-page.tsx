import { useTranslation } from 'react-i18next';

import ResumeItem, {
  type ResumeItemProperties,
} from '../components/resume/resume-item';
import ResumeKnowledgeItem from '../components/resume/resume-knowledge-item';
import ResumeSkillItem from '../components/resume/resume-skill-item';

import PageSection from '@/components/page/page-section';
import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

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
  const { t } = useTranslation();

  return (
    <PageWrapper title={capitalizeWords(t('resume-page.title'))}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PageSection title={t('resume-page.experience')}>
          <div className="grid grid-cols-1 gap-6">
            {experienceData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </PageSection>
        <PageSection title={t('resume-page.education')}>
          <div className="grid grid-cols-1 gap-6">
            {educationData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </PageSection>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-2 lg:pt-12">
        <PageSection title={t('resume-page.working-skills')}>
          <div className="skill_items rounded-md bg-primary-foreground">
            {skillData.map((item, index) => (
              <ResumeSkillItem key={index} {...item} />
            ))}
          </div>
        </PageSection>
        <PageSection title={t('resume-page.knowledges')}>
          <div className="flex flex-wrap gap-4">
            {knowledgeLabels.map((label, index) => (
              <ResumeKnowledgeItem key={index} label={label} />
            ))}
          </div>
        </PageSection>
      </div>
    </PageWrapper>
  );
};

export default ResumePage;
