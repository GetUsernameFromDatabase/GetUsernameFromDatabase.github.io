import type { IconType } from 'react-icons';

import { cn } from '../../utils/classname-resolver';

export interface AboutCardProperties {
  icon: IconType;
  title: string;
  description: string | string[];
  iconClassName?: string;
}

const AboutCard: React.FC<AboutCardProperties> = ({ ...properties }) => {
  return (
    <div className="flex gap-5 rounded-md border border-slate-200 p-4 dark:border-slate-800">
      {properties.icon({
        className: cn('h-28 w-28', properties.iconClassName),
      })}
      <div>
        <h4 className="text-xl font-semibold dark:text-white">
          {properties.title}
        </h4>
        <p className="text-gray-lite leading-8 dark:text-[#A6A6A6]">
          {properties.description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
