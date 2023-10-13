import AboutGrid from '../components/about/about-grid';
import ProgrammingLanguageSlider from '../components/programming-language-slider';

const AboutPage = () => {
  const aboutInfo = [
    {
      iconSrc: '/images/icons/icon-1.svg',
      title: 'Ui/Ux Design',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    },
    {
      iconSrc: '/images/icons/icon-2.svg',
      title: 'App Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    },
    {
      iconSrc: '/images/icons/icon-3.svg',
      title: 'Photography',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    },
    {
      iconSrc: '/images/icons/icon-4.svg',
      title: 'Photography',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    },
    {
      iconSrc: '/images/icons/icon-5.svg',
      title: 'Management',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    },
    {
      iconSrc: '/images/icons/icon-6.svg',
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    },
  ];

  const aboutMe = [
    "In today's world, there is no limit to what one can learn. With the vast amount of information available, it is possible to find answers to almost any question or to draw conclusions based on the available data.",
    "However, the key to success lies not only in acquiring knowledge but also in refining one's thought process. The better one becomes at learning, the more knowledge they can amass. By focusing on developing our ability to learn, we can unlock our full potential and achieve great things.",
  ];
  return (
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] relative -translate-y-1/2 font-roboto-slab text-4xl font-bold text-slate-900 after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary dark:text-slate-50">
          About Me
        </h2>
        <div className="space-y-2">
          {aboutMe.map((item, index) => (
            <p
              key={index}
              className="font-medium leading-7 text-gray-700 dark:text-slate-500"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <h3 className="pb-4 pt-6 text-4xl font-semibold text-slate-900 dark:text-slate-50">
        What I do!
      </h3>
      <AboutGrid items={aboutInfo}></AboutGrid>
      <div>
        <h3 className="pb-4 pt-6 text-4xl font-semibold text-slate-900 dark:text-slate-50">
          Languages/Frameworks
        </h3>
        <ProgrammingLanguageSlider></ProgrammingLanguageSlider>
      </div>
    </div>
  );
};

export default AboutPage;
