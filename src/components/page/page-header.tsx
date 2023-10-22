export interface PageHeaderProperties {
  title: string;
}

const PageHeader: React.FC<PageHeaderProperties> = ({ ...properties }) => {
  return (
    <h2 className="after:contents[] font-roboto-slab relative -translate-y-1/2 text-4xl font-bold text-primary after:absolute after:right-8 after:top-1/2 after:h-[2px] after:bg-accent md:after:w-36">
      {properties.title}
    </h2>
  );
};

export default PageHeader;
