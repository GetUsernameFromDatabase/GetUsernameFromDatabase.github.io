import { CircleIcon, LinkIcon, StarIcon } from 'lucide-react';
import type { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { cn } from '@/lib/utils';

interface GithubCardProperties {
  title: string;
  description: string | React.ReactNode;
  link: string;
  updated_at?: DateTime | null;
  starCount?: number;
  mainLanguage?: string | null;
}

const getLanguageStyle = (language?: string) => {
  let className = 'fill-sky-400 text-sky-400';
  // TODO: finish this or scrap the entire file
  switch (language?.toLowerCase()) {
    case 'shell': {
      // This assignment is for my IDE mostly -- tailwind intellisense
      className = 'fill-[#89e051] text-[#89e051]';
      return className;
    }
    default: {
      return className;
    }
  }
};

function GithubCard(properties: GithubCardProperties) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{properties.title}</CardTitle>
          <CardDescription>{properties.description}</CardDescription>
        </div>
        <Button variant="secondary" size="icon" className="ml-auto" asChild>
          <Link to={properties.link} target="_blank">
            <LinkIcon></LinkIcon>
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          {properties.mainLanguage && (
            <div className="flex items-center">
              <CircleIcon
                className={cn(
                  'mr-1 h-3 w-3',
                  getLanguageStyle(properties.mainLanguage),
                )}
              />
              {properties.mainLanguage}
            </div>
          )}

          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            {properties.starCount}
          </div>
          {properties.updated_at && (
            <div>{`${t('last-updated-at', {
              ns: 'common',
            })} ${properties.updated_at.toLocaleString()}`}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default GithubCard;
