import { socialMediaLinks } from '../../info';

const SidebarSocialMedia = () => {
  return (
    <div className="flex justify-center space-x-3">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`hover:hover_active flex h-10 w-10 items-center justify-center rounded bg-light-gray shadow-md hover:text-slate-50 dark:bg-mid-dark ${item.customClass}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SidebarSocialMedia;
