type PageSectionProperties = {
  children?: React.ReactNode;
  title: string;
  rootClassName?: string;
};

const PageSection: React.FC<PageSectionProperties> = ({ ...properties }) => {
  return (
    <section className={properties.rootClassName}>
      <h3 className="pb-6 text-3xl font-medium">{properties.title}</h3>
      {properties.children}
    </section>
  );
};

export default PageSection;
