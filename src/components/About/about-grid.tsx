import AboutCard, { AboutCardProps } from './about-card';

interface AboutGridProps {
  items: AboutCardProps[];
}

const AboutGrid: React.FC<AboutGridProps> = ({ items }) => {
  return (
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
      {items.map((item, index) => (
        <AboutCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AboutGrid;
