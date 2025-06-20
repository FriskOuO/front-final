import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './Draw.css';
import cardBackImage from '../assets/tarot/back.png';

const Draw = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const deckContainerRef = useRef(null);
  
  const [selectedCards, setSelectedCards] = useState([]);
  const [availableCards, setAvailableCards] = useState([...Array(78).keys()]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardCount, setCardCount] = useState(3); // 預設為3張牌
  const [intent, setIntent] = useState('');
  const [containerWidth, setContainerWidth] = useState(0);
  const [deckType, setDeckType] = useState('full'); // 'full'或'major'，預設為完整牌組
  
  // 取得容器寬度
  useEffect(() => {
    const updateWidth = () => {
      if (deckContainerRef.current) {
        setContainerWidth(deckContainerRef.current.clientWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  
  // 從URL參數或state獲取設置
  useEffect(() => {
    console.log("Location state:", location.state); // 調試用
    console.log("URL params:", new URLSearchParams(location.search).toString()); // 調試用
    
    const params = new URLSearchParams(location.search);
    
    // 獲取牌組類型 (deckType)
    const deckTypeFromParams = params.get('deckType');
    const deckTypeFromState = location.state?.deckType;
    
    console.log("Deck type from URL:", deckTypeFromParams); // 調試用
    console.log("Deck type from state:", deckTypeFromState); // 調試用
    
    if (deckTypeFromParams === 'major' || deckTypeFromState === 'major') {
      setDeckType('major');
      console.log("Setting deck type to major"); // 調試用
    } else {
      setDeckType('full');
      console.log("Setting deck type to full"); // 調試用
    }
    
    // 獲取牌數
    const countFromParams = params.get('cardCount') ? parseInt(params.get('cardCount')) : null;
    const countFromState = location.state?.cardCount;
    
    if (countFromParams) {
      setCardCount(countFromParams);
    } else if (countFromState) {
      setCardCount(countFromState);
    }
    
    // 獲取意圖
    const intentFromParams = params.get('intent');
    const intentFromState = location.state?.intent;
    
    if (intentFromParams) {
      setIntent(intentFromParams);
    } else if (intentFromState) {
      setIntent(intentFromState);
    }
    
    // 初始化時自動洗牌
    // 將handleShuffle的調用移到下方，確保先設置好deckType
  }, [location.search, location.state]);
  
  // 監聽deckType變化，當它改變時洗牌
  useEffect(() => {
    handleShuffle();
  }, [deckType]);
  
  // 洗牌功能 - 根據牌組類型洗不同數量的牌
  const handleShuffle = () => {
    setIsShuffling(true);
    
    // 重置已選擇的牌
    setSelectedCards([]);
    
    // 決定牌組的長度
    const deckLength = deckType === 'major' ? 22 : 78;
    console.log("Shuffling with deck length:", deckLength); // 調試用
    
    // 創建一個新的洗牌數組
    const newDeck = [...Array(deckLength).keys()];
    
    // Fisher-Yates 洗牌算法
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    
    setTimeout(() => {
      setAvailableCards(newDeck);
      setIsShuffling(false);
    }, 1000);
  };
  
  // 處理卡片選擇
  const handleCardSelect = (cardIndex, row = 1) => {
    if (selectedCards.length >= cardCount || isShuffling) return;
    
    let actualIndex = cardIndex;
    // 大阿爾卡納牌組索引直接使用，完整牌組需要計算行
    if (deckType === 'full' && row === 2) {
      actualIndex = cardIndex + 39;
    }
    
    const cardId = availableCards[actualIndex];
    
    // 添加選擇的牌
    setSelectedCards(prev => [...prev, cardId]);
  };
  
  // 進入閱讀頁面
  const handleComplete = () => {
    if (selectedCards.length === cardCount) {
      navigate('/reading', { 
        state: { 
          selectedCards: selectedCards,
          intent,
          cardCount,
          deckType
        } 
      });
    }
  };
  
  // 渲染塔羅牌組，根據deckType判斷顯示一排還是兩排
  const renderTarotDeck = () => {
    const sideMargin = 40;
    const cardWidth = 100;
    
    if (deckType === 'major') {
      // 只顯示一排大阿爾卡納牌 (22張)
      const cardsPerRow = 22;
      const availableWidth = containerWidth - (sideMargin * 2);
      const visibleWidth = (availableWidth - cardWidth) / (cardsPerRow - 1);
      const startX = sideMargin;
      
      return (
        <div className="tarot-deck-display major-arcana">
          <div className="tarot-deck-row major-arcana-row">
            {Array.from({ length: cardsPerRow }).map((_, index) => {
              const leftPosition = startX + (index * visibleWidth);
              
              return (
                <div 
                  key={`card-major-${index}`} 
                  className={`tarot-card ${isShuffling ? 'shuffling' : ''} ${selectedCards.includes(availableCards[index]) ? 'selected' : ''}`}
                  style={{
                    left: `${leftPosition}px`,
                    backgroundImage: `url(${cardBackImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: index
                  }}
                  onClick={() => !isShuffling && handleCardSelect(index)}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      // 顯示兩排完整塔羅牌 (78張)
      const cardsPerRow = 39;
      const availableWidth = containerWidth - (sideMargin * 2);
      const visibleWidth = (availableWidth - cardWidth) / (cardsPerRow - 1);
      const startX = sideMargin;
      
      return (
        <div className="tarot-deck-overlapping-display">
          {/* 第一排卡片 - 39張 */}
          <div className="tarot-deck-row">
            {Array.from({ length: cardsPerRow }).map((_, index) => {
              const leftPosition = startX + (index * visibleWidth);
              
              return (
                <div 
                  key={`card-row1-${index}`} 
                  className={`tarot-card ${isShuffling ? 'shuffling' : ''} ${selectedCards.includes(availableCards[index]) ? 'selected' : ''}`}
                  style={{
                    left: `${leftPosition}px`,
                    backgroundImage: `url(${cardBackImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: index
                  }}
                  onClick={() => !isShuffling && handleCardSelect(index, 1)}
                />
              );
            })}
          </div>
          
          {/* 第二排卡片 - 39張 */}
          <div className="tarot-deck-row second-row">
            {Array.from({ length: cardsPerRow }).map((_, index) => {
              const leftPosition = startX + (index * visibleWidth);
              
              return (
                <div 
                  key={`card-row2-${index}`} 
                  className={`tarot-card ${isShuffling ? 'shuffling' : ''} ${selectedCards.includes(availableCards[index + cardsPerRow]) ? 'selected' : ''}`}
                  style={{
                    left: `${leftPosition}px`,
                    backgroundImage: `url(${cardBackImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: index
                  }}
                  onClick={() => !isShuffling && handleCardSelect(index, 2)}
                />
              );
            })}
          </div>
        </div>
      );
    }
  };
  
  // 渲染根據選擇的牌數量動態生成的槽位
  const renderCardSlots = () => {
    return (
      <div className="card-slots">
        {Array.from({ length: cardCount }).map((_, index) => (
          <div 
            key={`slot-${index}`} 
            className={`card-slot ${index < selectedCards.length ? 'filled' : ''}`}
          >
            {index < selectedCards.length ? (
              <div 
                className="selected-card"
                style={{
                  backgroundImage: `url(${cardBackImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ) : (
              <div className="empty-slot"></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // 添加處理返回上一頁的函數
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="draw-container">
      <div className="draw-header">
        <h1 className="draw-title">{t('draw.title')}</h1>
        <p className="draw-instruction">
          {t('draw.selectInstruction', { count: cardCount })}
        </p>
        
        {/* 顯示當前牌組類型 */}
        <div className="deck-type-indicator">
          {deckType === 'major' ? t('draw.majorArcanaDeck') : t('draw.fullTarotDeck')}
        </div>
      </div>
      
      <div className={`drawing-area ${deckType === 'major' ? 'major-arcana-layout' : ''}`}>
        {/* 塔羅牌組 */}
        <div className="deck-container" ref={deckContainerRef}>
          {renderTarotDeck()}
        </div>
        
        {/* 底部選牌區域 */}
        <div className="selection-area">
          {renderCardSlots()}
        </div>
      </div>
      
      {/* 底部按鈕 */}
      <div className="draw-navigation">
        {/* 上一步按鈕 */}
        <button 
          className="back-button" 
          onClick={handleGoBack}
        >
          {t('common.back')}
        </button>
        
        {/* 洗牌按鈕 */}
        <button 
          className={`shuffle-button ${isShuffling ? 'shuffling-animation' : ''}`} 
          onClick={handleShuffle}
          disabled={isShuffling}
        >
          {t('draw.shuffle')}
        </button>
        
        {/* 下一步按鈕 */}
        <button 
          className="continue-button" 
          disabled={selectedCards.length !== cardCount}
          onClick={handleComplete}
        >
          {t('common.next')}
        </button>
      </div>
    </div>
  );
};

export default Draw;