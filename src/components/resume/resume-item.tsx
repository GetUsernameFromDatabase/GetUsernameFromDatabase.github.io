import React from 'react';

interface ResumeItemProps {
  date: string;
  title: string;
  institution: string;
  className?: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ date, title, institution, className }) => (
  <div className={`dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 ${className}`}>
    <span className='text-sm text-slate-400'>{date}</span>
    <h4 className='text-xl font-medium text-slate-800 dark:text-slate-100'>
      {title}
    </h4>
    <p className='text-base font-normal text-slate-700 dark:text-slate-200'>
      {institution}
    </p>
  </div>
);

export default ResumeItem;
