import { DateTime } from 'luxon';

import type { TranslationNsKeys } from '@/plugins/i18n';

interface Education {
  institute: string;
  description: TranslationNsKeys;
  type: TranslationNsKeys;
  start_date: DateTime;
  end_date?: DateTime;
  className?: string;
}

export const myEducation: Education[] = [
  {
    institute: 'Miina Härma Gümnaasium',
    description: 'education.MHG_description',
    type: 'education.type.secondary',
    start_date: DateTime.fromISO('2017'),
    end_date: DateTime.fromISO('2020'),
    className: 'bg-indigo-100 dark:bg-indigo-700',
  },
  {
    institute: 'Tallinna Polütehnikum',
    description: 'education.TPT_description',
    type: 'education.type.vocational',
    start_date: DateTime.fromISO('2020'),
    end_date: DateTime.fromISO('2022'),
    className: 'bg-blue-100 dark:bg-blue-500',
  },
];
// I want to write one way, display other way
myEducation.reverse();
