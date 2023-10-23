/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as resources from './resources';

import type { FlattenKeys } from '@type/my-type-utilities';

//https://www.i18next.com/overview/typescript
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: DefaultTranslationResource;
  }
}
export type AvailableLanguage = keyof typeof resources;
export type DefaultTranslationResource = typeof resources.en;

// TODO: I would like to make these types better -- more harmonious with i18n
export type TranslationNsKeys = FlattenKeys<typeof resources.en.translation>;
export type CommonNsKeys = FlattenKeys<typeof resources.en.common>;

export interface Language {
  translationKey: TranslationNsKeys;
  /** Unicode flag, emoji */
  icon: string;
}
export type Languages = Record<
  AvailableLanguage | (string & NonNullable<unknown>),
  Language
>;
export const languages: Languages = {
  en: { icon: '🇬🇧', translationKey: 'languages.en' },
  et: { icon: '🇪🇪', translationKey: 'languages.et' },
  ru: { icon: '🇷🇺', translationKey: 'languages.ru' },
};

i18n.use(initReactI18next).init({
  resources,
  // lng: 'en',
  fallbackLng: 'en',
  ns: ['translation', 'common'],
  interpolation: {
    escapeValue: false,
  },
});

export { default } from 'i18next';
