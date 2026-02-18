import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ja from './locales/ja.json';

// Map query param shortcuts to i18next language codes
const langMap = { jp: 'ja', ja: 'ja', en: 'en' };

// Read ?lang= query parameter
const params = new URLSearchParams(window.location.search);
const queryLang = params.get('lang');
const resolvedLng = langMap[queryLang?.toLowerCase()] || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    },
    lng: resolvedLng,        // override with query param if present
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
