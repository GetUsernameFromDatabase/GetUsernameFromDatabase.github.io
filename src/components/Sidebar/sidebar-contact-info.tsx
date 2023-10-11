import { BsJournalText, BsTelephoneOutbound } from "react-icons/bs";
import { personalInfo } from "../../info";
import { BiMap } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

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
    <ul className='flex flex-col bg-light-gray dark:bg-mid-dark px-7 py-8 rounded-2xl mt-10'>
      {contactItems.map((item, index) => (
      <li
        key={index}
        className={`flex items-center gap-6 border-b border-slate-300 py-3`}
      >
        <div
          className={`w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black ${item.customClass} hover:hover_active group cursor-pointer text-xl`}
        >
          {item.icon}
        </div>
        <div className='flex flex-col dark:text-white'>
          <span className='text-slate-500 text-xs font-bold'>{item.label}</span>
          {item.link ? (
            <a
              className='transition-all duration-100 hover:text-primary'
              href={item.link}
            >
              {item.value}
            </a>
          ) : (
            <span className='transition-all duration-100'>{item.value}</span>
          )}
        </div>
      </li>
    ))}
    </ul>
  );
};

export default SidebarContactInfo;
