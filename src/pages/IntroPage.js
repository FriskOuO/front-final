import React from 'react';
import TarotIntroFlow from '../components/TarotIntroFlow';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="intro-background">
        {/* 背景圖片會在 CSS 中加載 */}
      </div>
      <div className="background-overlay"></div>
      <div className="intro-content">
        <TarotIntroFlow />
      </div>
      {/* 添加流星效果 */}
      <div className="shooting-star"></div>
      <div className="shooting-star delay-1"></div>
      <div className="shooting-star delay-2"></div>
      <div className="shooting-star delay-3"></div>
    </div>
  );
};

export default IntroPage;