import AboutCard, { type AboutCardProperties } from './about-card';

interface AboutGridProperties {
  items: AboutCardProperties[];
}

const AboutGrid: React.FC<AboutGridProperties> = ({
  items,
}: AboutGridProperties) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
      {items.map((item, index) => (
        <AboutCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AboutGrid;
