import { DateTime } from 'luxon';

import type { TranslationNsKeys } from '@/plugins/i18n';

interface JobExperience {
  company: string;
  position: TranslationNsKeys;
  description: TranslationNsKeys;
  type: TranslationNsKeys;
  start_date: DateTime;
  end_date?: DateTime;
  className?: string;
}

export const myJobExperiences: JobExperience[] = [
  {
    company: 'Sjolund Estonia OÜ',
    description: 'work.descriptions.0',
    position: 'work.positions.software-developer',
    type: 'work.types.internship',
    start_date: DateTime.fromISO('2021-08-02'),
    end_date: DateTime.fromISO('2021-09-30'),
    className: 'bg-yellow-100 dark:bg-yellow-700',
  },
  {
    company: 'Sjolund Estonia OÜ',
    description: 'work.descriptions.1',
    position: 'work.positions.software-developer',
    type: 'work.types.contract',
    start_date: DateTime.fromISO('2021-11-16'),
    end_date: DateTime.fromISO('2021-12-13'),
    className: 'bg-yellow-200 dark:bg-yellow-800',
  },
  {
    company: 'Eesti Põllumajandusloomade Jõudluskontroll',
    description: 'work.descriptions.2',
    position: 'work.positions.software-developer',
    type: 'work.types.internship',
    start_date: DateTime.fromISO('2022-06-01'),
    end_date: DateTime.fromISO('2022-09-30'),
    className: 'bg-green-100 dark:bg-green-700',
  },
  {
    company: 'Raintree Systems OÜ ',
    description: 'work.descriptions.3',
    position: 'work.positions.full-stack-developer',
    type: 'work.types.full-time',
    start_date: DateTime.fromISO('2022-10-03'),
    className: 'bg-cyan-100 dark:bg-cyan-700',
  },
];
// I want to write one way, display other way
myJobExperiences.reverse();
