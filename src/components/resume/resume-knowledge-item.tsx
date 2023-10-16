import * as React from 'react';

interface ResumeKnowledgeItemProperties {
  label: string;
}

const ResumeKnowledgeItem: React.FC<ResumeKnowledgeItemProperties> = ({
  label,
}) => (
  <button className="rounded-md bg-secondary px-3 py-1 text-base text-primary">
    {label}
  </button>
);

export default ResumeKnowledgeItem;
