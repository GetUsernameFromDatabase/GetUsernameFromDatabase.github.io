import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

import ResumeItem, {
  type ResumeItemProperties,
} from '../components/resume/resume-item';
import ResumeKnowledgeItem from '../components/resume/resume-knowledge-item';
import ResumeSkillItem from '../components/resume/resume-skill-item';

import PageSection from '@/components/page/page-section';
import PageWrapper from '@/components/page/page-wrapper';
import ResumeCard from '@/components/resume/resume-card';
import { myJobExperiences } from '@/info/experiences';
import { capitalizeWords } from '@/utils/string-manipulation';

const educationData: ResumeItemProperties[] = [
  {
    start_date: DateTime.now(),
    title: 'Ph.D in Horriblensess',
    institution: 'ABC University, Los Angeles, CA',
    className: 'bg-yellow-100 dark:bg-yellow-700',
  },
  {
    start_date: DateTime.now(),
    title: 'Sr. Software Tester',
    institution: 'Google Inc.',
    className: 'bg-rose-100 dark:bg-rose-700',
  },
  {
    start_date: DateTime.now(),
    title: 'Best Developer',
    institution: 'University Of Melbourne, NA',
    className: 'bg-indigo-100 dark:bg-indigo-700',
  },
];

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
        <ResumeCard
          title={t('resume-page.experience.title')}
          description={t('resume-page.experience.description')}
        >
          {myJobExperiences.map((item, index) => (
            <ResumeItem
              key={index}
              title={t(item.position)}
              institution={item.company}
              start_date={item.start_date}
              end_date={item.end_date}
              description={
                t(item.description, {
                  joinArrays: '\n',
                }) as string
              }
              className={item.className}
            ></ResumeItem>
          ))}
        </ResumeCard>
        <PageSection title={t('resume-page.education.title')}>
          <div className="grid grid-cols-1 gap-6">
            {educationData.map((item, index) => (
              <ResumeItem
                key={index}
                {...item}
                description="aa asd asd asd adsasdasasdasdas a dasdasd asd asd"
              />
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
