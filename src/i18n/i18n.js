import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import zhTranslation from './zh.json';

const resources = {
  en: {
    translation: enTranslation
  },
  zh: {
    translation: zhTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 預設語言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // 不需要額外轉義
    }
  });

export default i18n;