import { DateTime } from 'luxon';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../ui/button';

import { useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@/lib/utils';
import { getSkimmedDuration } from '@/utils/dates';

export interface ResumeItemProperties {
  title: string;
  institution: string;
  start_date: DateTime;
  end_date?: DateTime;
  description?: string;
  className?: string | string[];
}

// TODO: add capability to show only year and calculate only by year
const ResumeItem: React.FC<ResumeItemProperties> = ({
  className,
  ...properties
}) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowSize();

  const descriptionReference = React.useRef<HTMLParagraphElement | null>(null);

  const [seeAll, setSeeAll] = React.useState(false);
  const [showSeeAllButton, setShowSeeAllButton] = React.useState(false);

  React.useEffect(() => {
    if (!descriptionReference.current) return setShowSeeAllButton(false);
    const { clientHeight, scrollHeight } = descriptionReference.current;
    return setShowSeeAllButton(clientHeight < scrollHeight || seeAll);
  }, [windowWidth, seeAll]);

  const toggleSeeAll = () => {
    setSeeAll((previousValue) => !previousValue);
  };

  const dateFromTill = `${properties.start_date.toLocaleString()} - ${
    properties.end_date?.toLocaleString() ?? t('till-now')
  }`;

  const dateDuration = (properties.end_date ?? DateTime.now())
    .diff(properties.start_date)
    .rescale();
  const skimmedDateDuration = getSkimmedDuration(dateDuration);

  return (
    <div
      className={cn(
        'space-y-2 whitespace-pre-line rounded-lg py-4 pl-5 pr-3',
        className,
      )}
    >
      <span className="text-sm text-primary/80">
        {`${dateFromTill} • ${skimmedDateDuration.toHuman()}`}
      </span>
      <h4 className="text-xl font-medium text-primary">{properties.title}</h4>
      <span className="text-sm text-primary/90">{properties.institution}</span>
      {properties.description && (
        <p
          ref={descriptionReference}
          className={cn('text-base font-normal text-primary', {
            'line-clamp-3': !seeAll,
          })}
        >
          {properties.description}
        </p>
      )}
      {showSeeAllButton && (
        <Button
          onClick={toggleSeeAll}
          variant="outline"
          className="bg-transparent"
        >
          {seeAll
            ? t('see-less', { ns: 'common' })
            : t('see-more', { ns: 'common' })}
        </Button>
      )}
    </div>
  );
};

export default ResumeItem;
