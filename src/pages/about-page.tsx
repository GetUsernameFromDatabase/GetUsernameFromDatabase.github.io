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
    <div className='pt-16 px-12 mt-8'>
      <div>
        <h2 className='text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52'>
          About Me
        </h2>
        <div className='space-y-2'>
          {aboutMe.map((item, index) => (
            <p
              key={index}
              className='text-gray-700 dark:text-slate-500 leading-7 font-medium'
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <h3 className='text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4'>
        What I do!
      </h3>
      <AboutGrid items={aboutInfo}></AboutGrid>
      <div>
        <h3 className='text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4'>
          Languages/Frameworks
        </h3>
        <ProgrammingLanguageSlider></ProgrammingLanguageSlider>
      </div>
    </div>
  );
};

export default AboutPage;
