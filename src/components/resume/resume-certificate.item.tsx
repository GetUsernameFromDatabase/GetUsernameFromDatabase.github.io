import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';

import type { MyCertificate } from '@/info/knowledge';

interface ResumeCertificateItemProperties extends MyCertificate {}

const ResumeCertificateItem: FC<ResumeCertificateItemProperties> = ({
  ...properties
}) => {
  const { t } = useTranslation();

  // const displayCredential = `${t('resume-page.certificates.credential-id')} ${
  //   properties.credentialID
  // }`;
  const display = {
    credentialID: `${t('resume-page.certificates.credential-id')} ${
      properties.credentialID
    }`,
    issuer: `${t('resume-page.certificates.issuer')} ${properties.issuer}`,
  };

  return (
    <div className="space-y-2 whitespace-pre-line rounded-lg bg-primary-foreground py-4 pl-5 pr-3">
      <span className="text-sm text-primary/80">
        {properties.issued.toLocaleString()}
      </span>
      <h4 className="text-xl font-medium text-primary">{properties.title}</h4>
      <span className="text-sm text-primary/90">{display.credentialID}</span>
      <p className="text-base font-normal text-primary">{display.issuer}</p>
      <div className="mx-2 mt-2 flex flex-wrap justify-between">
        <Button asChild className="mt-2">
          <Link to={properties.link} target="_blank">
            {t('resume-page.certificates.show-credential')}
          </Link>
        </Button>
        {properties.linkToFile && (
          <Button asChild className="mt-2">
            <Link to={properties.linkToFile} target="_blank">
              {t('resume-page.certificates.show-certificate')}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResumeCertificateItem;
