import { cn } from '@/lib/utils';
import type { SocialMediaLink } from '@type/my-types';

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
            'flex h-10 w-10 items-center justify-center rounded bg-accent shadow-md hover:bg-accent/60',
            item.className,
          )}
          title={item.label}
        >
          {item.icon({})}
        </a>
      ))}
    </div>
  );
};

export default SidebarSocialMedia;
