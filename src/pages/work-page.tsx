import { useTranslation } from 'react-i18next';

import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

const Work = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper title={capitalizeWords(t('work-page.title'))}></PageWrapper>
  );
};

export default Work;
