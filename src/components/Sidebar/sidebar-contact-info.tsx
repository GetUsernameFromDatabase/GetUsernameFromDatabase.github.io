import { AiOutlineCalendar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsJournalText, BsTelephoneOutbound } from 'react-icons/bs';

import { personalInfo } from '../../info';

const contactItems = [
  {
    icon: <BsTelephoneOutbound />,
    label: 'Phone',
    value: personalInfo.phone,
    link: `tel:${personalInfo.phone}`,
    customClass: 'text-cyan-500',
  },
  {
    icon: <BiMap />,
    label: 'Location',
    value: personalInfo.location,
    customClass: 'text-[#6AB5B9]',
  },
  {
    icon: <BsJournalText />,
    label: 'Email',
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
    customClass: 'text-[#FD7590]',
  },
  {
    icon: <AiOutlineCalendar />,
    label: 'Birthday',
    value: personalInfo.birthday,
    customClass: 'text-[#C17CEB]',
  },
];

const SidebarContactInfo = () => {
  return (
    <ul className="mt-10 flex flex-col rounded-2xl bg-light-gray px-7 py-8 dark:bg-mid-dark">
      {contactItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center gap-6 border-b border-slate-300 py-3`}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded bg-light-gray shadow-md dark:bg-black ${item.customClass} hover:hover_active group cursor-pointer text-xl`}
          >
            {item.icon}
          </div>
          <div className="flex flex-col dark:text-white">
            <span className="text-xs font-bold text-slate-500">
              {item.label}
            </span>
            {item.link ? (
              <a
                className="transition-all duration-100 hover:text-primary"
                href={item.link}
              >
                {item.value}
              </a>
            ) : (
              <span className="transition-all duration-100">{item.value}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SidebarContactInfo;
