import * as React from 'react';

import { cn } from '@/lib/utils';

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
        'mb-6 space-y-2 rounded-lg py-4 pl-5 pr-3 dark:border-2 dark:border-[#212425]',
        className,
      )}
    >
      <span className="text-sm text-primary/80">{properties.date}</span>
      <h4 className="text-xl font-medium text-primary">{properties.title}</h4>
      <p className="text-base font-normal text-primary">
        {properties.institution}
      </p>
    </div>
  );
};

export default ResumeItem;
