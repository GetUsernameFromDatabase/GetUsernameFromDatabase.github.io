import React from 'react';

interface ResumeKnowledgeItemProps {
  label: string;
}

const ResumeKnowledgeItem: React.FC<ResumeKnowledgeItemProps> = ({ label }) => (
  <button className='text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'>
    {label}
  </button>
);

export default ResumeKnowledgeItem;
