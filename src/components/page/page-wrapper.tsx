import PageHeader, { type PageHeaderProperties } from './page-header';

type PageWrapperProperties = {
  children?: React.ReactNode;
} & Pick<PageHeaderProperties, 'title'>;

const PageWrapper: React.FC<PageWrapperProperties> = ({ ...properties }) => {
  return (
    <div className="mt-8 px-12 pt-16">
      <PageHeader title={properties.title} />
      {properties.children}
    </div>
  );
};

export default PageWrapper;
