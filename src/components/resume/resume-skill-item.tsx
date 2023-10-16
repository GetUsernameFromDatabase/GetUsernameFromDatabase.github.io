import type { FC } from 'react';

import { cn } from '@/lib/utils';

interface ResumeSkillItemProperties {
  label: string;
  percentage: number;
  className?: string;
}

const ResumeSkillItem: FC<ResumeSkillItemProperties> = ({
  className,
  ...properties
}) => {
  const percentage = `${properties.percentage}%`;
  return (
    <div className="p-4">
      <p className="flex items-center justify-between pb-1 text-base text-primary">
        <span>{properties.label}</span>
        <span>{percentage}</span>
      </p>
      <div
        className={cn(
          `after:contents-[] relative h-[3px] w-full rounded bg-secondary after:absolute after:left-0 after:top-0 after:h-full after:rounded`,
          className,
        )}
      />
    </div>
  );
};

export default ResumeSkillItem;
