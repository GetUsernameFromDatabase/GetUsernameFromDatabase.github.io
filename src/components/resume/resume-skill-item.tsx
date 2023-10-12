import React from 'react';

interface ResumeSkillItemProps {
  label: string;
  percentage: number;
  className?: string;
}

const ResumeSkillItem: React.FC<ResumeSkillItemProps> = ({ label, percentage, className }) => (
  <div className='pb-8'>
    <p className='text-slate-500 pb-1 flex justify-between items-center text-base dark:text-slate-100'>
      <span>{label}</span>
      <span>{percentage}%</span>
    </p>
    <div
      className={`w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[${percentage}%] after:h-full after:absolute after:top-0 after:left-0 after:rounded ${className}`}
    />
  </div>
);

export default ResumeSkillItem;
