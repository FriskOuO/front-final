import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // 修正: 獲取當前語言，確保與配置中的語言代碼一致
  const currentLang = i18n.language;
  console.log('Current language:', currentLang); // 調試用

  const changeLanguage = (lng) => {
    console.log('Switching to language:', lng); // 調試用
    i18n.changeLanguage(lng);
    // 將語言選擇保存到 localStorage
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="language-switcher">
      <button 
        className={currentLang === 'en' || currentLang.startsWith('en') ? 'active' : ''} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={currentLang === 'zh-TW' || currentLang.startsWith('zh') ? 'active' : ''} 
        onClick={() => changeLanguage('zh-TW')}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;