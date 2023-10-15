/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as resources from './resources';

export type TranslationKey = FlattenKeys<typeof resources.en>;

//https://www.i18next.com/overview/typescript
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof resources.en.translation;
    };
  }
}

i18n.use(initReactI18next).init({
  resources,
  // lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { default } from 'i18next';
