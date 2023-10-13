import * as React from 'react';

interface ResumeKnowledgeItemProperties {
  label: string;
}

const ResumeKnowledgeItem: React.FC<ResumeKnowledgeItemProperties> = ({
  label,
}) => (
  <button className="rounded-md bg-slate-200 px-3 py-1 text-base text-slate-700 dark:bg-slate-700 dark:text-slate-300">
    {label}
  </button>
);

export default ResumeKnowledgeItem;
