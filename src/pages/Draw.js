import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DrawArea from '../components/DrawArea';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './Draw.css'; // 假設您會建立對應的 CSS 檔案

const Draw = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [drawnCards, setDrawnCards] = useState([]);

  // 從上一頁取得資料
  const formData = location.state;
  
  // 如果沒有表單資料，導回首頁
  if (!formData) {
    navigate('/');
    return null;
  }

  const { name, topic, cardCount } = formData;

  // 當抽牌完成時的處理函數
  const handleDrawComplete = (cards) => {
    setDrawnCards(cards);
  };

  // 前往結果頁面
  const goToResult = () => {
    navigate('/result', { 
      state: { 
        name,
        topic,
        cards: drawnCards
      } 
    });
  };

  return (
    <div className="draw-page">
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      
      <header>
        <h1>{t('draw.title')}</h1>
      </header>
      
      <div className="user-info">
        <p>{t('draw.greeting', { name })}</p>
        <p>{t('draw.topic', { topic })}</p>
        <p>{t('draw.instruction', { count: cardCount })}</p>
      </div>
      
      <DrawArea 
        cardCount={parseInt(cardCount)} 
        onDrawComplete={handleDrawComplete} 
      />
      
      {drawnCards.length > 0 && (
        <div className="actions">
          <button 
            className="result-button" 
            onClick={goToResult}
          >
            {t('draw.seeResult')}
          </button>
        </div>
      )}
      
      <div className="back-link">
        <button onClick={() => navigate('/')}>
          {t('common.backToHome')}
        </button>
      </div>
    </div>
  );
};

export default Draw;