import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './Draw.css';
import cardBackImage from '../assets/tarot/back.png';
import tarotImageMap from '../assets/tarotImageMap';
import _ from 'lodash';

const Draw = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  // 初始化塔羅牌組
  const initializeDeck = (deckType) => {
    const deckLength = deckType === 'major' ? 22 : 78;
    return Array.from({ length: deckLength }, (_, i) => ({
      id: i,
    }));
  };
  
  // 使用 useMemo 初始化完整牌組
  const fullDeck = useMemo(() => {
    return initializeDeck('full');
  }, []);
  
  const majorDeck = useMemo(() => {
    return initializeDeck('major');
  }, []);
  
  const [deck, setDeck] = useState([]);
  const [selected, setSelected] = useState([]);
  const [animStage, setAnimStage] = useState(null); // null | 'collapse' | 'expand'
  const [cardCount, setCardCount] = useState(3);
  const [intent, setIntent] = useState('');
  const [deckType, setDeckType] = useState('full');
  
  // 從URL參數或state獲取設置
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    // 獲取牌組類型 (deckType)
    const deckTypeFromParams = params.get('deckType');
    const deckTypeFromState = location.state?.deckType;
    
    if (deckTypeFromParams === 'major' || deckTypeFromState === 'major') {
      setDeckType('major');
    } else {
      setDeckType('full');
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
  }, [location.search, location.state]);
  
  // 監聽deckType變化，當它改變時初始化牌組
  useEffect(() => {
    setDeck(deckType === 'major' ? [...majorDeck] : [...fullDeck]);
  }, [deckType, fullDeck, majorDeck]);
  
  // 洗牌功能 - 使用收合再展開的動畫
  const shuffleDeck = () => {
    if (animStage) return; // 動畫進行中不允許再次洗牌
    
    setAnimStage('collapse');
    setSelected([]); // 重置已選牌
    
    setTimeout(() => {
      // 0.5秒後真正洗牌
      const baseDeck = deckType === 'major' ? majorDeck : fullDeck;
      setDeck(_.shuffle([...baseDeck]));
      
      // 切換到展開動畫
      setAnimStage('expand');
      
      // 展開動畫完成後清除動畫狀態
      setTimeout(() => {
        setAnimStage(null);
      }, 600);
    }, 500);
  };
  
  // 選牌功能 - 修改為不跳動的版本
  const handlePick = (idx) => {
    if (selected.length >= cardCount || animStage) return;
    
    // 獲取選中的牌並決定正逆位
    const picked = { 
      ...deck[idx], 
      reversed: Math.random() < 0.5 
    };
    
    // 添加到已選牌組
    setSelected(prev => [...prev, picked]);
    
    // 從原牌組中標記為空位，不刪除而是保留位置
    // 注意：我們使用 'placeholder' 而不是 'empty' 來區分
    setDeck(prev => prev.map((card, i) => 
      i === idx ? { placeholder: true, id: `placeholder-${idx}` } : card
    ));
  };
  
  // 獲取卡牌正面圖片
  const getCardFace = (card) => {
    if (deckType === 'major' || card.id < 22) {
      // 大阿爾卡納牌
      const formattedId = card.id.toString().padStart(2, '0');
      const cardName = getMajorArcanName(card.id);
      return `/assets/tarot/major/rws_tarot_${formattedId}_${cardName}.jpg`;
    } else {
      // 小阿爾卡納牌
      const { suit, number } = getMinorArcanaDetails(card.id);
      return `/assets/tarot/minor/${suit}/${suit}${number.toString().padStart(2, '0')}.jpg`;
    }
  };
  
  // 輔助函數：獲取大阿爾卡納牌的名稱
  const getMajorArcanName = (id) => {
    const names = [
      'fool', 'magician', 'high_priestess', 'empress', 'emperor', 
      'hierophant', 'lovers', 'chariot', 'strength', 'hermit',
      'wheel_of_fortune', 'justice', 'hanged_man', 'death', 'temperance',
      'devil', 'tower', 'star', 'moon', 'sun', 'judgement', 'world'
    ];
    return names[id];
  };
  
  // 輔助函數：根據 ID 計算小阿爾卡納牌的類型和數字
  const getMinorArcanaDetails = (id) => {
    // 減去22因為前面是大阿爾卡納牌
    const minorId = id - 22;
    const suits = ['cups', 'pents', 'swords', 'wands'];
    const suitIndex = Math.floor(minorId / 14); // 每種花色14張牌
    const numberInSuit = (minorId % 14) + 1; // 從1開始計數
    
    return { 
      suit: suits[suitIndex], 
      number: numberInSuit 
    };
  };
  
  // 進入閱讀頁面
  const handleComplete = () => {
    if (selected.length === cardCount) {
      navigate('/reading', { 
        state: { 
          selectedCards: selected.map(card => card.id),
          drawnCards: selected,
          intent,
          cardCount,
          deckType
        } 
      });
    }
  };
  
  // 返回上一頁
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="draw-container">
      {/* 添加流星效果 */}
      <div className="shooting-star"></div>
      <div className="shooting-star delay-1"></div>
      <div className="shooting-star delay-2"></div>
      
      <div className="draw-header">
        <h1 className="draw-title">{t('draw.title')}</h1>
        <p className="draw-instruction">
          {t('draw.selectInstruction', { count: cardCount })}
        </p>
        
        <div className="deck-type-indicator">
          {deckType === 'major' ? t('draw.majorArcanaDeck') : t('draw.fullTarotDeck')}
        </div>
      </div>
      
      <div className="drawing-area">
        <div className={`deck-container ${animStage || ''}`}>
          {/* 第一行卡片 - 約一半的牌組 */}
          <div className="card-row">
            {deck.slice(0, Math.ceil(deck.length / 2)).map((card, i) => (
              <div key={card.id || `slot-${i}`} className="card-slot">
                {card.placeholder ? (
                  <div className="card-placeholder"></div>
                ) : (
                  <img
                    src={cardBackImage}
                    className="tarot-card"
                    style={{ '--idx': i }}
                    onClick={() => handlePick(i)}
                    alt="Tarot Card Back"
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* 第二行卡片 - 剩餘一半的牌組 */}
          <div className="card-row">
            {deck.slice(Math.ceil(deck.length / 2)).map((card, i) => {
              // 計算實際索引，因為是第二行
              const actualIndex = i + Math.ceil(deck.length / 2);
              return (
                <div key={card.id || `slot-${actualIndex}`} className="card-slot">
                  {card.placeholder ? (
                    <div className="card-placeholder"></div>
                  ) : (
                    <img
                      src={cardBackImage}
                      className="tarot-card"
                      style={{ '--idx': i }} // 使用相對於行的索引
                      onClick={() => handlePick(actualIndex)} // 但使用絕對索引進行選牌
                      alt="Tarot Card Back"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="selected-bar">
          {selected.map((card, i) => (
            <img
              key={`selected-${i}`}
              src={tarotImageMap[getCardFace(card)] || cardBackImage}
              className={`face ${card.reversed ? 'rev' : ''}`}
              alt={`Selected Card ${i+1}`}
            />
          ))}
          
          {/* 空位顯示 */}
          {selected.length < cardCount && (
            Array(cardCount - selected.length)
              .fill(0)
              .map((_, i) => (
                <div key={`empty-selected-${i}`} className="selected-empty-slot">
                  <span>?</span>
                </div>
              ))
          )}
        </div>
      </div>
      
      <div className="draw-navigation">
        <button 
          className="back-button" 
          onClick={handleGoBack}
          disabled={animStage !== null}
        >
          {t('common.back')}
        </button>
        
        <button 
          className="shuffle-button" 
          onClick={shuffleDeck}
          disabled={animStage !== null}
        >
          {t('draw.shuffle')}
        </button>
        
        <button 
          className={`continue-button ${selected.length === cardCount ? 'active' : ''}`}
          disabled={selected.length !== cardCount || animStage !== null}
          onClick={handleComplete}
        >
          {t('common.next')}
        </button>
      </div>
    </div>
  );
};

export default Draw;