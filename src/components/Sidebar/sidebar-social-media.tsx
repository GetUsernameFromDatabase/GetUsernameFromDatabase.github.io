import type { SocialMediaLink } from '../../../@types/info';
import { cn } from '../../utils/classname-resolver';

interface SidebarSocialMediaProperties {
  links: Readonly<SocialMediaLink[]>;
}

const SidebarSocialMedia = ({
  ...properties
}: SidebarSocialMediaProperties) => {
  return (
    <div className="flex justify-center space-x-3">
      {properties.links.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={cn(
            'hover:hover_active flex h-10 w-10 items-center justify-center rounded bg-light-gray shadow-md hover:text-slate-50 dark:bg-mid-dark',
            item.className,
          )}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SidebarSocialMedia;
