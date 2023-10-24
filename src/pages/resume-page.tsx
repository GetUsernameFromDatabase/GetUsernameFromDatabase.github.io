import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PageWrapper from '@/components/page/page-wrapper';
import ResumeCard from '@/components/resume/resume-card';
import ResumeCertificateItem from '@/components/resume/resume-certificate.item';
import ResumeExperienceItem from '@/components/resume/resume-experience-item';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { myEducation } from '@/info/education';
import { myJobExperiences } from '@/info/experiences';
import { myCertificates, myKnowledges } from '@/info/knowledge';
import { linksConnectedToMe } from '@/info/personal';
import { capitalizeWords } from '@/utils/string-manipulation';

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
            <ResumeExperienceItem
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
            ></ResumeExperienceItem>
          ))}
        </ResumeCard>
        <ResumeCard
          title={t('education.title')}
          description={t('education.description')}
          cardContentClassName="space-y-4"
        >
          {myEducation.map((item, index) => (
            <ResumeExperienceItem
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
            ></ResumeExperienceItem>
          ))}
        </ResumeCard>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-2 lg:pt-12">
        <ResumeCard
          title={t('resume-page.certificates.title')}
          description={
            <>
              {t('resume-page.certificates.description') +
                ` (${myCertificates.length})`}
              <Button variant="link" asChild>
                <Link
                  to={linksConnectedToMe.linkedIn.certifications}
                  target="_blank"
                >
                  {t('see-more-on', { ns: 'common' })} linkedIn
                </Link>
              </Button>
            </>
          }
          cardContentClassName="space-y-4 overflow-auto max-h-80"
        >
          {myCertificates.map((item, index) => (
            <ResumeCertificateItem
              key={index}
              {...item}
            ></ResumeCertificateItem>
          ))}
        </ResumeCard>
        <ResumeCard
          title={t('resume-page.knowledges.title')}
          description={
            <>
              {t('resume-page.knowledges.description')}
              <Button variant="link" asChild>
                <Link to={linksConnectedToMe.linkedIn.skills} target="_blank">
                  {t('see-more-on', { ns: 'common' })} linkedIn
                </Link>
              </Button>
            </>
          }
          cardContentClassName="space-y-4"
        >
          <div>
            {myKnowledges.map((item, index) => (
              <Badge key={index} className="m-1">
                {item}
              </Badge>
            ))}
          </div>
        </ResumeCard>
      </div>
    </PageWrapper>
  );
};

export default ResumePage;
