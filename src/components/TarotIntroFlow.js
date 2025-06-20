import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TarotIntroFlow.css';

const TarotIntroFlow = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 狀態管理
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState('');
  const [cardCount, setCardCount] = useState(0);
  const [userName, setUserName] = useState('');
  const [deckMode, setDeckMode] = useState('full');
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // 步驟1選項
  const intentOptions = [
    { 
      id: 'general', 
      text: t('introFlow.intentGeneral'),
      icon: '✨' 
    },
    { 
      id: 'love', 
      text: t('introFlow.intentLove'),
      icon: '💖' 
    },
    { 
      id: 'career', 
      text: t('introFlow.intentCareer'),
      icon: '💼'
    },
    { 
      id: 'curious', 
      text: t('introFlow.intentCurious'),
      icon: '🔮'
    }
  ];
  
  // 步驟2選項
  const cardCountOptions = [
    { 
      count: 1, 
      name: t('introFlow.oneCard'),
      description: t('introFlow.oneCardDesc') 
    },
    { 
      count: 3, 
      name: t('introFlow.threeCards'),
      description: t('introFlow.threeCardsDesc')
    },
    { 
      count: 6, 
      name: t('introFlow.sixCards'),
      description: t('introFlow.sixCardsDesc') 
    }
  ];

  // 返回上一步
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // 前往下一步
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  // 表單提交
  const handleSubmit = () => {
    // 準備導航參數
    const params = new URLSearchParams();
    params.append('intent', intent);
    params.append('cardCount', cardCount);
    if (userName) params.append('name', userName);
    params.append('deckMode', deckMode);
    
    // 導航到抽牌頁面
    navigate(`/draw?${params.toString()}`);
  };

  // 檢查是否可以進行到下一步
  const canProceed = () => {
    if (step === 1) return !!intent;
    if (step === 2) return cardCount > 0;
    return true; // 第三步用戶名可選
  };

  return (
    <div className="tarot-intro-flow">
      {/* 步驟指示器 */}
      <div className="steps-indicator">
        {[1, 2, 3].map((num) => (
          <div 
            key={num} 
            className={`step-dot ${step >= num ? 'active' : ''}`}
          >
            <span>{num}</span>
          </div>
        ))}
      </div>
      
      {/* 主要內容區域 */}
      <div className="flow-content">
        {/* 步驟 1 */}
        {step === 1 && (
          <div className="step-container fade-in">
            <h2>{t('introFlow.chooseIntent')}</h2>
            <p className="step-description">{t('introFlow.intentDescription')}</p>
            
            <div className="intent-options">
              {intentOptions.map((option, index) => (
                <div
                  key={option.id}
                  className={`intent-card ${intent === option.id ? 'selected' : ''} delay-${index} glow-container`}
                  onClick={() => setIntent(option.id)}
                >
                  <div className="intent-icon">{option.icon}</div>
                  <div className="intent-text">{option.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 步驟 2 */}
        {step === 2 && (
          <div className="step-container fade-in">
            <h2>{t('introFlow.chooseCardCount')}</h2>
            <p className="step-description">{t('introFlow.cardCountDescription')}</p>
            
            <div className="card-count-options">
              {cardCountOptions.map((option, index) => (
                <div
                  key={option.count}
                  className={`count-card ${cardCount === option.count ? 'selected' : ''} delay-${index} glow-container`}
                  onClick={() => setCardCount(option.count)}
                >
                  <h3>{option.name}</h3>
                  <div className="card-illustration">
                    {[...Array(option.count)].map((_, i) => (
                      <div key={i} className="mini-card"></div>
                    ))}
                  </div>
                  <p className="count-description">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 步驟 3 */}
        {step === 3 && (
          <div className="step-container fade-in">
            <h2>{t('introFlow.enterName')}</h2>
            <p className="step-description">{t('introFlow.nameDescription')}</p>
            
            <div className="name-input-container">
              <input
                type="text"
                placeholder={t('introFlow.namePlaceholder')}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="fade-in delay-1"
              />
              <p className="input-note">{t('introFlow.nameNote')}</p>
            </div>
            
            {/* 進階設定區域 */}
            <div className="advanced-settings">
              <div 
                className="advanced-toggle"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                <span>{t('introFlow.advancedSettings')}</span>
                <span className="toggle-icon">{showAdvanced ? '▲' : '▼'}</span>
              </div>
              
              {showAdvanced && (
                <div className="advanced-content">
                  <p className="advanced-description">
                    {t('introFlow.deckDescription')}
                  </p>
                  
                  <div className="deck-mode-options">
                    <div 
                      className={`deck-option ${deckMode === 'full' ? 'selected' : ''}`}
                      onClick={() => setDeckMode('full')}
                    >
                      <div className="radio-circle">
                        {deckMode === 'full' && <div className="radio-dot"></div>}
                      </div>
                      <div className="deck-info">
                        <h4>{t('introFlow.fullDeck')}</h4>
                        <p>{t('introFlow.fullDeckDesc')}</p>
                      </div>
                    </div>
                    
                    <div 
                      className={`deck-option ${deckMode === 'major' ? 'selected' : ''}`}
                      onClick={() => setDeckMode('major')}
                    >
                      <div className="radio-circle">
                        {deckMode === 'major' && <div className="radio-dot"></div>}
                      </div>
                      <div className="deck-info">
                        <h4>{t('introFlow.majorDeck')}</h4>
                        <p>{t('introFlow.majorDeckDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* 導航按鈕 */}
      <div className="flow-navigation">
        {step > 1 && (
          <button 
            className="nav-button back-button"
            onClick={handleBack}
          >
            {t('introFlow.back')}
          </button>
        )}
        
        <button 
          className="nav-button next-button glow-container"
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {step === 3 ? t('introFlow.drawCards') : t('introFlow.next')}
        </button>
      </div>
    </div>
  );
};

export default TarotIntroFlow;