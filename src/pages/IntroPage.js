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
    </div>
  );
};

export default IntroPage;