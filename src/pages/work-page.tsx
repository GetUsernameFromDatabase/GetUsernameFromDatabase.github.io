import { useTranslation } from 'react-i18next';

import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

const Work = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper title={capitalizeWords(t('work-page.title'))}>
      TODO: fetch data and display from
      https://api.github.com/users/GetUsernameFromDatabase/repos
    </PageWrapper>
  );
};

export default Work;
