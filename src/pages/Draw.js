import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tarotCards } from '../data/tarotCards';
import './Draw.css';

// 提取查詢參數的函數
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Draw = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const query = useQuery();
  
  // 從URL獲取引導流程的參數
  const intent = query.get('intent') || '';
  const cardCount = parseInt(query.get('cardCount')) || 3;
  const userName = query.get('name') || '';
  const deckMode = query.get('deckMode') || 'full';
  
  // 狀態管理
  const [selectedCards, setSelectedCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [isShuffling, setIsShuffling] = useState(true);
  const [isReady, setIsReady] = useState(false);
  
  // 初始化牌庫
  useEffect(() => {
    // 根據deckMode過濾牌組
    let availableCards = [...tarotCards];
    if (deckMode === 'major') {
      availableCards = tarotCards.filter(card => card.arcana === 'major');
    }
    
    // 隨機洗牌
    const shuffledDeck = [...availableCards].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
    
    // 模擬洗牌動畫
    setTimeout(() => {
      setIsShuffling(false);
      setIsReady(true);
    }, 2500);
    
  }, [deckMode]);
  
  // 選牌邏輯
  const handleCardSelect = (card) => {
    if (selectedCards.length >= cardCount) return;
    
    // 檢查卡片是否已被選擇
    if (selectedCards.some(selected => selected.id === card.id)) return;
    
    // 添加新選中的卡片
    setSelectedCards([...selectedCards, card]);
    
    // 如果已選滿指定數量的卡片，準備進入結果頁面
    if (selectedCards.length + 1 === cardCount) {
      setTimeout(() => {
        navigateToResult([...selectedCards, card]);
      }, 1500);
    }
  };
  
  // 導航到結果頁面
  const navigateToResult = (cards) => {
    // 準備讀牌結果參數
    const readingData = {
      cards: cards.map(card => ({
        id: card.id,
        isReversed: Math.random() > 0.5 // 隨機決定牌面正逆位
      })),
      intent,
      userName,
      timestamp: new Date().toISOString()
    };
    
    // 將讀牌資料保存到會話存儲中
    sessionStorage.setItem('tarotReading', JSON.stringify(readingData));
    
    // 導航到結果頁面
    navigate('/result');
  };
  
  // 重新開始抽牌
  const resetDrawing = () => {
    setSelectedCards([]);
    setIsShuffling(true);
    
    // 重新洗牌
    const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
    
    setTimeout(() => {
      setIsShuffling(false);
    }, 1500);
  };
  
  return (
    <div className="draw-page">
      <div className="draw-background">
        {/* 背景圖片會在 CSS 中加載 */}
      </div>
      <div className="background-overlay"></div>
      
      <div className="draw-container">
        {/* 用戶意圖和問候 */}
        <div className="draw-header glow-container">
          {userName && (
            <h2 className="user-greeting">
              {t('draw.greeting', { name: userName })}
            </h2>
          )}
          
          {intent && (
            <div className="user-intent">
              <p>{t('draw.intentPrompt')}: 
                <span className="intent-text">
                  {t(`introFlow.intent${intent.charAt(0).toUpperCase() + intent.slice(1)}`)}
                </span>
              </p>
            </div>
          )}
          
          <h1 className="draw-title">{t('draw.title')}</h1>
          
          <div className="draw-instruction">
            <p>
              {selectedCards.length === 0 
                ? t('draw.instruction', { count: cardCount })
                : t('draw.cardsSelected', { 
                    selected: selectedCards.length, 
                    total: cardCount 
                  })
              }
            </p>
          </div>
        </div>
        
        {/* 抽牌區域 */}
        <div className={`tarot-table ${isShuffling ? 'shuffling' : ''}`}>
          {isShuffling ? (
            <div className="shuffling-animation">
              <div className="shuffle-card"></div>
              <div className="shuffle-card"></div>
              <div className="shuffle-card"></div>
              <p className="shuffle-text">{t('draw.shuffling')}</p>
            </div>
          ) : (
            <div className="deck-area">
              {/* 卡組和已選卡片 */}
              <div className="card-selection">
                <div className="deck" onClick={() => resetDrawing()}>
                  <div className="deck-pile">
                    <div className="card-back"></div>
                    <div className="card-back card-back-2"></div>
                    <div className="card-back card-back-3"></div>
                  </div>
                  <p className="deck-label">{t('draw.deck')}</p>
                </div>
                
                <div className="spread-area">
                  {deck.slice(0, 12).map((card, index) => (
                    <div 
                      key={card.id}
                      className={`spread-card ${selectedCards.some(c => c.id === card.id) ? 'selected' : ''}`}
                      style={{
                        transform: `rotate(${(index - 6) * 5}deg) translateX(${(index - 6) * 10}px)`,
                        zIndex: index
                      }}
                      onClick={() => handleCardSelect(card)}
                    >
                      <div className="card-back"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 已選卡片預覽 */}
              <div className="selected-cards-preview">
                {Array.from({ length: cardCount }).map((_, index) => (
                  <div 
                    key={index}
                    className={`card-placeholder ${index < selectedCards.length ? 'filled' : ''}`}
                  >
                    {index < selectedCards.length ? (
                      <div className="selected-card-back"></div>
                    ) : (
                      <span className="placeholder-number">{index + 1}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* 重置按鈕 */}
        {selectedCards.length > 0 && selectedCards.length < cardCount && (
          <button className="reset-button glow-container" onClick={resetDrawing}>
            {t('draw.reset')}
          </button>
        )}
      </div>
    </div>
  );
};

export default Draw;