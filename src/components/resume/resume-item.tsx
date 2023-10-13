import * as React from 'react';

import { cn } from '../../utils/classname-resolver';

export interface ResumeItemProperties {
  date: string;
  title: string;
  institution: string;
  className?: string;
}

const ResumeItem: React.FC<ResumeItemProperties> = ({
  className,
  ...properties
}) => {
  return (
    <div
      className={cn(
        'mb-6 space-y-2 rounded-lg bg-gray-400 py-4 pl-5 pr-3 dark:border-2 dark:border-[#212425] dark:bg-mid-dark',
        className,
      )}
    >
      <span className="text-sm text-slate-400">{properties.date}</span>
      <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
        {properties.title}
      </h4>
      <p className="text-base font-normal text-slate-700 dark:text-slate-200">
        {properties.institution}
      </p>
    </div>
  );
};

export default ResumeItem;
