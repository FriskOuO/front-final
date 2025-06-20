import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(false);

  // 先顯示背景動畫，然後再顯示文字內容
  useEffect(() => {
    // 進一步減少延遲時間
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300); // 減少至 300 毫秒，讓文字更快出現
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="home-background">
        {/* 星空背景動畫會立即顯示 */}
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star delay-1"></div>
        <div className="shooting-star delay-2"></div>
        <div className="shooting-star delay-3"></div>
        <div className="shooting-star delay-4"></div>
        <div className="shooting-star delay-5"></div>
        <div className="shooting-star delay-6"></div>
      </div>
      <div className="background-overlay"></div>
      
      {/* 使用 showContent 狀態控制文字顯示 */}
      <div className={`home-content ${showContent ? 'visible' : ''}`}>
        <h1 className="home-title">
          {t('home.title')}
        </h1>
        
        <p className="home-subtitle">
          {t('home.subtitle')}
        </p>
        
        <div className="home-intro">
          <p>{t('home.intro')}</p>
        </div>
        
        <div className="home-buttons">
          <Link to="/intro" className="start-button glow-container">
            {t('home.startExperience')}
          </Link>
        </div>
      </div>
      
      <footer className="home-footer">
        {t('home.footer')}
      </footer>
    </div>
  );
};

export default Home;