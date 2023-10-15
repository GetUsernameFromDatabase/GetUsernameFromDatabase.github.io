/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as resources from './resources';

export type DefaultTranslationResource = typeof resources.en;
export type TranslationKey = FlattenKeys<typeof resources.en>;

//https://www.i18next.com/overview/typescript
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: DefaultTranslationResource;
  }
}

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
