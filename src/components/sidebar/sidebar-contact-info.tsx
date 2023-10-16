import type { contactItems } from '../../info';

import { cn } from '@/lib/utils';

interface SidebarContactInfoProperties {
  items: Readonly<typeof contactItems>;
}

const SidebarContactInfo = ({
  ...properties
}: SidebarContactInfoProperties) => {
  return (
    <ul className="mt-10 flex flex-col rounded-2xl bg-primary-foreground px-7 py-8">
      {properties.items.map((item, index) => (
        <li
          key={index}
          className={`flex items-center gap-6 border-b border-slate-300 py-3`}
        >
          <div
            /** //TODO: copy value on click */
            className={cn(
              'group flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-secondary text-xl shadow-md',
              item.className,
            )}
          >
            {item.icon({})}
          </div>
          <div className="flex flex-col dark:text-white">
            <span className="text-xs font-bold text-primary/70">
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
