import { socialMediaLinks } from '../../info';

const SidebarSocialMedia = () => {
  return (
    <div className='flex justify-center space-x-3'>
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-mid-dark hover:hover_active hover:text-slate-50 ${item.customClass}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SidebarSocialMedia;
