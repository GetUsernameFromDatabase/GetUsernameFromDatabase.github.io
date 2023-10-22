import type { IconType } from 'react-icons';

import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

import { cn } from '@/lib/utils';

export interface AboutCardProperties {
  icon: IconType;
  title: string;
  description: string | string[];
  iconClassName?: string;
}

// Maybe at some point change to AboutWhatIDoCard orsm
const AboutCard: React.FC<AboutCardProperties> = ({ ...properties }) => {
  return (
    <Card>
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="flex items-center">
            {properties.icon({
              className: cn('mr-1', properties.iconClassName),
            })}
            {properties.title}
          </CardTitle>
          <CardDescription>{properties.description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default AboutCard;
