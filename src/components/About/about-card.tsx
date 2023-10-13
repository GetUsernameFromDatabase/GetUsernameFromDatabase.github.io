import * as React from 'react';

export interface AboutCardProperties {
  iconSrc: string;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProperties> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="flex gap-5 rounded-md border border-slate-200 p-4 dark:border-slate-800">
      <div>
        <img className="w-28" src={iconSrc} alt={title} />
      </div>
      <div>
        <h4 className="text-xl font-semibold dark:text-white">{title}</h4>
        <p className="text-gray-lite leading-8 dark:text-[#A6A6A6]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
