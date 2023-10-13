import { FC } from 'react';

import { cn } from '../../utils/classname-resolver';

interface ResumeSkillItemProperties {
  label: string;
  percentage: number;
  className?: string;
}

const ResumeSkillItem: FC<ResumeSkillItemProperties> = ({
  className,
  ...properties
}) => (
  <div className="pb-8">
    <p className="flex items-center justify-between pb-1 text-base text-slate-500 dark:text-slate-100 ">
      <span>{properties.label}</span>
      <span>{properties.percentage}%</span>
    </p>
    <div
      className={cn(
        'after:contents-[] after:w-[${percentage}%] relative h-[3px] w-full rounded bg-slate-300 after:absolute after:left-0 after:top-0 after:h-full after:rounded',
        className,
      )}
    />
  </div>
);

export default ResumeSkillItem;
