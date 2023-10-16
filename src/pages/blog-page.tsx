import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] font-roboto-slab relative -translate-y-1/2 text-4xl font-bold text-primary after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary">
          {t('blog-page.title')}
        </h2>
      </div>
    </div>
  );
};

export default BlogPage;
