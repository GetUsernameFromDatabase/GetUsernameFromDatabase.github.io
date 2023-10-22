import { useTranslation } from 'react-i18next';

import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

const NoPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper title={capitalizeWords(t('404.title'))}>
      {t('404.description')}
    </PageWrapper>
  );
};

export default NoPage;
