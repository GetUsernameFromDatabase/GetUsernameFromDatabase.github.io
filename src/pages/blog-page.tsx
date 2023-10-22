import { useTranslation } from 'react-i18next';

import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper title={capitalizeWords(t('blog-page.title'))}></PageWrapper>
  );
};

export default BlogPage;
