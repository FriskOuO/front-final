import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tarotImageMap from '../assets/tarotImageMap';
import { majorArcanaDescriptions } from '../data/majorArcanaDescriptions';
import { cupsDescriptions } from '../data/cupsDescriptions';
import { wandsDescriptions } from '../data/wandsDescriptions';
import { swordsDescriptions } from '../data/swordsDescriptions';
import { pentaclesDescriptions } from '../data/pentaclesDescriptions';
import LanguageSwitcher from '../components/LanguageSwitcher';
import './Reading.css';

const Reading = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [readingData, setReadingData] = useState(null);
  
  useEffect(() => {
    // 從上一個頁面獲取數據
    if (location.state?.drawnCards) {
      setReadingData(location.state);
    } else {
      navigate('/');
    }
  }, [location, navigate]);
  
  if (!readingData) return null;
  
  const { drawnCards, intent, cardCount } = readingData;
  
  // 根據不同的卡片數量，設置不同的佈局和解讀方式
  const getPositionTitle = (index) => {
    // 根據牌數和位置返回對應的位置標題
    if (cardCount === 1) {
      return t('reading.singleCard');
    } else if (cardCount === 3) {
      const positions = [
        t('reading.position1'), // 過去
        t('reading.position2'), // 現在
        t('reading.position3')  // 未來
      ];
      return positions[index];
    } else if (cardCount === 6) {
      const positions = [
        t('reading.position1_6cards'), // 你的狀態
        t('reading.position2_6cards'), // 他人/環境
        t('reading.position3_6cards'), // 挑戰/阻力
        t('reading.position4_6cards'), // 機會/支持
        t('reading.position5_6cards'), // 建議
        t('reading.position6_6cards')  // 結果趨勢
      ];
      return positions[index];
    }
    return '';
  };
  
  // 獲取卡片的描述資料
  const getCardDescription = (card) => {
    if (card.id < 22) {
      // 大阿爾卡納牌
      return majorArcanaDescriptions.find(desc => {
        const name = getMajorArcanName(card.id);
        return desc.name.includes(name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      });
    } else {
      // 小阿爾卡納牌
      const { suit, number } = getMinorArcanaDetails(card.id);
      let descriptions;
      
      // 根據花色選擇正確的描述數據
      switch(suit) {
        case 'cups':
          descriptions = cupsDescriptions;
          break;
        case 'swords':
          descriptions = swordsDescriptions;
          break;
        case 'pents':
        case 'pentacles':
          descriptions = pentaclesDescriptions;
          break;
        case 'wands':
          descriptions = wandsDescriptions;
          break;
        default:
          return null;
      }
      
      // 找到對應的卡片描述
      return descriptions.find(desc => {
        // 將數字轉換為對應的名字（如 1→Ace, 11→Page 等）
        const cardName = getCardNameByNumber(number, suit);
        return desc.name === cardName;
      });
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
  
  // 輔助函數：根據數字獲取卡片名稱
  const getCardNameByNumber = (number, suit) => {
    switch(number) {
      case 1: return `Ace of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
      case 11: return `Page of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
      case 12: return `Knight of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
      case 13: return `Queen of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
      case 14: return `King of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
      default: return `${number} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
    }
  };
  
  // 獲取卡片圖像路徑
  const getCardFace = (card) => {
    if (card.id < 22) {
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
  
  // 根據意圖獲取閱讀標題
  const getReadingTitle = () => {
    switch(intent) {
      case 'love': return t('reading.loveReading');
      case 'career': return t('reading.careerReading');
      case 'general': return t('reading.generalReading');
      case 'direction': return t('reading.directionReading');
      case 'healing': return t('reading.healingReading');
      case 'decision': return t('reading.decisionReading');
      case 'growth': return t('reading.growthReading');
      default: return t('reading.tarotReading');
    }
  };
  
  return (
    <div className="reading-page">
      <div className="reading-header">
        <h1 className="reading-title">{getReadingTitle()}</h1>
        <LanguageSwitcher />
      </div>
      
      <div className="reading-container">
        <div className={`cards-spread spread-${cardCount}`}>
          {drawnCards.map((card, index) => {
            const description = getCardDescription(card);
            return (
              <div key={index} className="card-position">
                <h3 className="position-title">{getPositionTitle(index)}</h3>
                <div className="card-container">
                  <div className={`card ${card.reversed ? 'reversed' : ''}`}>
                    <img 
                      src={tarotImageMap[getCardFace(card)]} 
                      alt={`Card ${index + 1}`} 
                      className="card-image" 
                    />
                  </div>
                  <div className="card-interpretation">
                    <h4 className="card-name">
                      {i18n.language === 'zh-tw' ? description?.zh : description?.name}
                      {card.reversed && ` (${t('cards.reversed')})`}
                    </h4>
                    {description && (
                      <div className="card-meaning">
                        <div className="meaning-section">
                          <h5>{t('cards.coreMeaning')}</h5>
                          <p>{card.reversed 
                            ? (i18n.language === 'zh-tw' ? description.reversed.core : description.reversed.core_en)
                            : (i18n.language === 'zh-tw' ? description.upright.core : description.upright.core_en)}
                          </p>
                        </div>
                        
                        <div className="meaning-section">
                          <h5>{t('cards.context')}</h5>
                          <p>{card.reversed 
                            ? (i18n.language === 'zh-tw' ? description.reversed.context : description.reversed.context_en)
                            : (i18n.language === 'zh-tw' ? description.upright.context : description.upright.context_en)}
                          </p>
                        </div>
                        
                        <div className="meaning-section">
                          <h5>{t('cards.advice')}</h5>
                          <p>{card.reversed 
                            ? (i18n.language === 'zh-tw' ? description.reversed.advice : description.reversed.advice_en)
                            : (i18n.language === 'zh-tw' ? description.upright.advice : description.upright.advice_en)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="reading-conclusion">
          <p>{t('reading.conclusion')}</p>
        </div>
        
        <div className="reading-actions">
          <button 
            className="action-button new-reading" 
            onClick={() => navigate('/')}
          >
            {t('reading.newReading')}
          </button>
          <button 
            className="action-button save-reading" 
            onClick={() => alert(t('common.featureComingSoon'))}
          >
            {t('reading.saveReading')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reading;