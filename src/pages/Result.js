import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardDisplay from '../components/CardDisplay';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './Result.css'; // 假設您會建立對應的 CSS 檔案

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // 從上一頁取得資料
  const resultData = location.state;
  
  // 如果沒有結果資料，導回首頁
  useEffect(() => {
    if (!resultData || !resultData.cards || resultData.cards.length === 0) {
      navigate('/');
    }
  }, [resultData, navigate]);
  
  if (!resultData) {
    return null;
  }
  
  const { name, topic, cards } = resultData;
  
  return (
    <div className="result-page">
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      
      <header>
        <h1>{t('result.title')}</h1>
      </header>
      
      <div className="reading-info">
        <p>{t('result.for', { name })}</p>
        <p>{t('result.regarding', { topic })}</p>
      </div>
      
      <div className="reading-intro">
        <p>{t('result.intro')}</p>
      </div>
      
      <div className="cards-reading">
        {cards.map((card, index) => (
          <div key={index} className="card-reading">
            <h3 className="position-title">
              {t(`result.position${index + 1}`, { count: cards.length })}
            </h3>
            <CardDisplay card={card} />
            <div className="card-interpretation">
              <p>{t('result.interpretation', { 
                position: t(`result.position${index + 1}`, { count: cards.length }), 
                card: t(`cards.${card.id}.name`), 
                meaning: card.isReversed 
                  ? t(`cards.${card.id}.reversed`) 
                  : t(`cards.${card.id}.upright`)
              })}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="reading-conclusion">
        <p>{t('result.conclusion')}</p>
      </div>
      
      <div className="actions">
        <button 
          className="new-reading-button" 
          onClick={() => navigate('/')}
        >
          {t('result.newReading')}
        </button>
      </div>
    </div>
  );
};

export default Result;