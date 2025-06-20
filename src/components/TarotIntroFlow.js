import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TarotIntroFlow.css';

const TarotIntroFlow = () => {
  // 獲取翻譯函數和當前語言
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // 狀態管理
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState('');
  const [cardCount, setCardCount] = useState(0);
  const [userName, setUserName] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [deckType, setDeckType] = useState('full'); // 預設為完整牌組
  
  // 處理牌組類型的變更
  const handleDeckTypeChange = (type) => {
    setDeckType(type);
  };
  
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
    },
    { 
      id: 'direction', 
      text: t('introFlow.intentDirection'),
      icon: '🧭'
    },
    { 
      id: 'healing', 
      text: t('introFlow.intentHealing'),
      icon: '🌱'
    },
    { 
      id: 'decision', 
      text: t('introFlow.intentDecision'),
      icon: '⚖️'
    },
    { 
      id: 'growth', 
      text: t('introFlow.intentGrowth'),
      icon: '🌟'
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
    params.append('deckType', deckType); // 確保傳遞 deckType
    
    // 導航到抽牌頁面
    navigate(`/draw?${params.toString()}`);
  };

  // 檢查是否可以進行到下一步
  const canProceed = () => {
    if (step === 1) return !!intent;
    if (step === 2) return cardCount > 0;
    return true; // 第三步用戶名可選
  };

  // 步驟1的渲染 (在 renderStepOne 函數中)
  const renderStepOne = () => {
    return (
      <div className="step-container step-one animate-fade-in">
        <h2>{t('introFlow.chooseIntent')}</h2>
        <p className="step-description">{t('introFlow.intentDescription')}</p>
        
        <div className="intent-options">
          {intentOptions.map((option, index) => (
            <div
              key={option.id}
              className={`intent-option ${intent === option.id ? 'selected' : ''} delay-${index % 5}`}
              onClick={() => setIntent(option.id)}
            >
              <div className="intent-icon">{option.icon}</div>
              <h3>{option.text.split('，')[0]}</h3>
              {option.text.includes('，') && 
                <p>{option.text.split('，')[1]}</p>
              }
            </div>
          ))}
        </div>
        
        <div className="nav-buttons">
          <button
            className="nav-button next-button"
            onClick={handleNext}
            disabled={!intent}
          >
            {t('common.next')}
          </button>
        </div>
      </div>
    );
  };

  // 更新卡片預覽的渲染函數
  const renderCardPreview = (count) => {
    if (count === 1) {
      return <div className="preview-card"></div>;
    } else if (count === 3) {
      return (
        <>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
        </>
      );
    } else if (count === 6) {
      // 直接返回六個卡片，避免使用 Array.map 可能的渲染問題
      return (
        <>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
        </>
      );
    }
    return null;
  };

  // 步驟 2 的渲染
  const renderStepTwo = () => {
    // 直接使用正確的描述文字，而非i18n鍵值
    const cardCountOptions = [
      {
        count: 1,
        title: "一張牌",
        description: "適合快速獲取洞察，回答單一問題"
      },
      {
        count: 3,
        title: "三張牌",
        description: "展示過去、現在和未來的能量流動"
      },
      {
        count: 6,
        title: "六張牌",
        description: "提供更全面的情況分析和深入指引"
      }
    ];

    // 如果使用i18n，確保有正確的翻譯
    if (t) {
      cardCountOptions[0].title = t('introFlow.oneCard');
      cardCountOptions[0].description = t('introFlow.oneCardDesc');
      cardCountOptions[1].title = t('introFlow.threeCards');
      cardCountOptions[1].description = t('introFlow.threeCardsDesc');
      cardCountOptions[2].title = t('introFlow.sixCards');
      cardCountOptions[2].description = t('introFlow.sixCardsDesc');
    }

    return (
      <div className="step-container fade-in">
        <h2>{t ? t('introFlow.chooseCardCount') : "選擇抽幾張牌"}</h2>
        <p className="step-description">
          {t ? t('introFlow.cardCountDescription') : "不同數量的牌組將提供不同深度的解讀"}
        </p>

        <div className="card-count-options">
          {cardCountOptions.map(option => (
            <div
              key={`card-${option.count}`}
              className={`card-count-option ${cardCount === option.count ? 'selected' : ''}`}
              data-count={option.count}
              onClick={() => setCardCount(option.count)}
            >
              <div className="card-count-preview">
                {renderCardPreview(option.count)}
              </div>
              <div className="card-text">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 步驟 3 的渲染 - 整合牌組設定
  const renderStepThree = () => {
    return (
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
        
        {/* 修改進階設定區域也使用翻譯函數 */}
        {renderAdvancedSettings()}
      </div>
    );
  };

  // 修改進階設定區域的渲染函數，使用翻譯
  const renderAdvancedSettings = () => {
    return (
      <div className="advanced-settings">
        <div 
          className="settings-header"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          {t('introFlow.advancedSettings')}
          <span className={`arrow ${showAdvanced ? 'open' : ''}`}>▼</span>
        </div>
        
        {showAdvanced && (
          <div className="settings-content">
            <h4>{t('introFlow.chooseDeckType')}</h4>
            <div className="deck-options">
              <div 
                className={`deck-option ${deckType === 'full' ? 'selected' : ''}`}
                onClick={() => handleDeckTypeChange('full')}
              >
                <div className="radio-circle">
                  {deckType === 'full' && <div className="radio-dot"></div>}
                </div>
                <div className="deck-info">
                  <h4>{t('introFlow.fullDeck')}</h4>
                  <p>{t('introFlow.fullDeckDesc')}</p>
                </div>
              </div>
              
              <div 
                className={`deck-option ${deckType === 'major' ? 'selected' : ''}`}
                onClick={() => handleDeckTypeChange('major')}
              >
                <div className="radio-circle">
                  {deckType === 'major' && <div className="radio-dot"></div>}
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
    );
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
        {step === 1 && renderStepOne()}
        {step === 2 && renderStepTwo()}
        {step === 3 && renderStepThree()}
      </div>
      
      {/* 條件渲染底部導航按鈕 */}
      {step !== 1 && (
        <div className="nav-buttons">
          {step > 1 && (
            <button className="nav-button back-button" onClick={handleBack}>
              {t('common.back')}
            </button>
          )}
          
          <button
            className="nav-button next-button"
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {t('common.next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default TarotIntroFlow;