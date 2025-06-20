import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 確保正確引入翻譯文件
import en from './en.json';
import zh from './zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en': {
        translation: en
      },
      'zh-TW': {
        translation: zh
      }
    },
    lng: localStorage.getItem('i18nextLng') || 'zh-TW',
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;