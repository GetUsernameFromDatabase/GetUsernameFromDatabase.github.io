import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ResumeSkillItem from '../components/resume/resume-skill-item';

import PageSection from '@/components/page/page-section';
import PageWrapper from '@/components/page/page-wrapper';
import ResumeCard from '@/components/resume/resume-card';
import ResumeItem from '@/components/resume/resume-item';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { myEducation } from '@/info/education';
import { myJobExperiences } from '@/info/experiences';
import { myKnowledges } from '@/info/knowledge';
import { capitalizeWords } from '@/utils/string-manipulation';

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

const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper title={capitalizeWords(t('resume-page.title'))}>
      <div className="space-y-3">
        <ResumeCard
          title={t('resume-page.experience.title')}
          description={t('resume-page.experience.description')}
          cardContentClassName="space-y-4"
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
        <ResumeCard
          title={t('education.title')}
          description={t('education.description')}
          cardContentClassName="space-y-4"
        >
          {myEducation.map((item, index) => (
            <ResumeItem
              key={index}
              title={item.institute}
              institution={t(item.type)}
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
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-2 lg:pt-12">
        <PageSection title={t('resume-page.working-skills')}>
          {/* TODO: show certificates instead */}
          <div className="skill_items rounded-md bg-primary-foreground">
            {skillData.map((item, index) => (
              <ResumeSkillItem key={index} {...item} />
            ))}
          </div>
        </PageSection>
        <PageSection title={t('resume-page.knowledges')}>
          <div>
            {myKnowledges.map((item, index) => (
              <Badge key={index} className="m-1">
                {item}
              </Badge>
            ))}
          </div>
          <Button variant="link" asChild>
            <Link to="https://www.linkedin.com/in/ryan-murulo-415852147/details/skills/">
              {t('see-more-on', { ns: 'common' })} linkedIn
            </Link>
          </Button>
        </PageSection>
      </div>
    </PageWrapper>
  );
};

export default ResumePage;
