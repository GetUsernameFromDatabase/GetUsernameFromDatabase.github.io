import React from 'react';

export interface AboutCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
      <div>
        <img className="w-28" src={iconSrc} alt={title} />
      </div>
      <div>
        <h4 className="dark:text-white text-xl font-semibold">{title}</h4>
        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;