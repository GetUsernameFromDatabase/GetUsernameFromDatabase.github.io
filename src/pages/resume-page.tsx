import ResumeItem from '../components/resume/resume-item';
import ResumeKnowledgeItem from '../components/resume/resume-knowledge-item';
import ResumeSkillItem from '../components/resume/resume-skill-item';

const educationData = [
  {
    date: '2021-2023',
    title: 'Ph.D in Horriblensess',
    institution: 'ABC University, Los Angeles, CA',
    className: 'bg-yellow-50',
  },
  {
    date: '2019 - Present',
    title: 'Sr. Software Tester',
    institution: 'Google Inc.',
    className: 'bg-rose-50',
  },
  {
    date: '2021',
    title: 'Best Developer',
    institution: 'University Of Melbourne, NA',
    className: 'bg-indigo-50',
  },
] as const;

const experienceData = [
  {
    date: '2017-2021',
    title: 'Computer Science',
    institution: 'Imperialize Technical Institute',
    className: 'bg-cyan-50',
  },
  {
    date: '2015-2017',
    title: 'Cr. Web Developer',
    institution: 'SadInc Hours',
    className: 'bg-pink-50',
  },
  {
    date: '2008',
    title: 'Best Writer',
    institution: 'Online Typodev Solution Ltd.',
    className: 'bg-green-50',
  },
] as const;

const skillData = [
  { label: 'Web Design', percentage: 80, className: 'after:bg-red-400' },
  { label: 'Mobile App', percentage: 95, className: 'after:bg-yellow-400' },
  { label: 'Illustrator', percentage: 66, className: 'after:bg-cyan-400' },
  { label: 'Photoshop', percentage: 75, className: 'after:bg-purple-400' },
] as const;

const knowledgeLabels = [
  'Digital Design',
  'Marketing',
  'Social Media',
  'Print',
  'Time Management',
  'Flexibility',
] as const;

const ResumePage = () => {
  const sectionStyles = 'text-3xl dark:text-white font-medium pb-6';

  return (
    <div className='pt-16 px-12 mt-8'>
      <h2 className='text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52'>
        Resume
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div>
          <h3 className={sectionStyles}>Education</h3>
          <div className='grid grid-cols-1 gap-6'>
            {educationData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className={sectionStyles}>Experience</h3>
          <div className='grid grid-cols-1 gap-6'>
            {experienceData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 lg:pt-12'>
        <div>
          <h3 className='text-3xl dark:text-white font-medium pb-8'>
            Working Skills
          </h3>
          {skillData.map((item, index) => (
            <ResumeSkillItem key={index} {...item} />
          ))}
        </div>
        <div>
          <h3 className='text-3xl dark:text-white font-medium pb-8'>
            Knowledge's
          </h3>
          <div className='flex flex-wrap gap-4'>
            {knowledgeLabels.map((label, index) => (
              <ResumeKnowledgeItem key={index} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
