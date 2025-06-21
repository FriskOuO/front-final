import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tarotImageMap from '../assets/tarotImageMap';
import { majorArcanaDescriptions } from '../data/majorArcanaDescriptions';
import { cupsDescriptions } from '../data/cupsDescriptions';
import { wandsDescriptions } from '../data/wandsDescriptions';
import { swordsDescriptions } from '../data/swordsDescriptions';
import { pentaclesDescriptions } from '../data/pentaclesDescriptions';
import { positionLabels } from '../data/positionLabels';
import './Reading.css';

const Reading = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [readingData, setReadingData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // 從上一個頁面獲取數據
    if (location.state?.drawnCards) {
      setReadingData(location.state);
      // 添加動畫延遲
      setTimeout(() => {
        setIsLoaded(true);
      }, 300);
    } else {
      // 如果沒有數據，導航回首頁
      navigate('/');
    }
  }, [location, navigate]);
  
  if (!readingData) return null;
  
  const { drawnCards, intent, cardCount } = readingData;
  const spread = positionLabels[cardCount];
  
  // 獲取卡片的描述資料
  const getCardDescription = (card) => {
    console.log("嘗試獲取卡片描述:", card.id, card.reversed);
    
    // 處理大阿爾卡納牌 (0-21)
    if (card.id < 22) {
      // 大阿爾卡納的處理邏輯保持不變
      const majorNames = [
        "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", 
        "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
        "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
        "The Devil", "The Tower", "The Star", "The Moon", "The Sun", 
        "Judgement", "The World"
      ];
      
      return majorArcanaDescriptions.find(desc => desc.name === majorNames[card.id]);
    } 
    // 處理小阿爾卡納牌
    else {
      const { suit, number } = getMinorArcanaDetails(card.id);
      console.log(`處理小阿爾卡納: ID=${card.id}, 花色=${suit}, 數字=${number}`);
      
      // 選擇正確的描述資料集
      let descriptions;
      switch(suit) {
        case 'cups': 
          descriptions = cupsDescriptions;
          break;
        case 'pents': // 確保只使用 'pents'
          descriptions = pentaclesDescriptions;
          break;
        case 'swords':
          descriptions = swordsDescriptions;
          break;
        case 'wands':
          descriptions = wandsDescriptions;
          break;
        default:
          console.error("未知的花色:", suit);
          return null;
      }

      // 構建可能的卡片名稱格式
      let nameToFind = "";
      switch(number) {
        case 1: nameToFind = "Ace of Pentacles"; break;
        case 2: nameToFind = "Two of Pentacles"; break;
        case 3: nameToFind = "Three of Pentacles"; break;
        case 4: nameToFind = "Four of Pentacles"; break;
        case 5: nameToFind = "Five of Pentacles"; break;
        case 6: nameToFind = "Six of Pentacles"; break;
        case 7: nameToFind = "Seven of Pentacles"; break;
        case 8: nameToFind = "Eight of Pentacles"; break;
        case 9: nameToFind = "Nine of Pentacles"; break;
        case 10: nameToFind = "Ten of Pentacles"; break;
        case 11: nameToFind = "Page of Pentacles"; break;
        case 12: nameToFind = "Knight of Pentacles"; break;
        case 13: nameToFind = "Queen of Pentacles"; break;
        case 14: nameToFind = "King of Pentacles"; break;
        default: nameToFind = `${number} of Pentacles`;
      }
      
      // 對於其他花色，替換名稱中的 "Pentacles"
      if (suit !== 'pents') {
        const suitName = getSuitDisplayName(suit);
        nameToFind = nameToFind.replace("Pentacles", suitName);
      }
      
      console.log(`尋找卡片名稱: "${nameToFind}"`);
      console.log(`可用的名稱:`, descriptions.map(d => d.name));
      
      // 嘗試直接匹配英文名稱
      let found = descriptions.find(desc => desc.name === nameToFind);
      if (found) {
        console.log(`找到卡片描述: ${found.name}`);
        return found;
      }
      
      // 如果找不到，嘗試中文名稱匹配
      // 構建中文名稱
      const suitCh = suit === 'cups' ? '聖杯' : 
                   suit === 'pents' ? '星幣' : 
                   suit === 'swords' ? '寶劍' : 
                   suit === 'wands' ? '權杖' : '';
      
      let zhName;
      if (number <= 10) {
        zhName = `${suitCh}${number}`;
      } else {
        const rankCh = number === 11 ? '侍者' : 
                     number === 12 ? '騎士' : 
                     number === 13 ? '皇后' : '國王';
        zhName = `${suitCh}${rankCh}`;
      }
      
      console.log(`尋找中文名稱: "${zhName}"`);
      
      found = descriptions.find(desc => desc.zh === zhName);
      if (found) {
        console.log(`通過中文名稱找到卡片描述: ${found.zh}`);
        return found;
      }
      
      console.warn(`無法找到卡片描述: ID=${card.id}, 名稱=${nameToFind}, 中文=${zhName}`);
      return null;
    }
  };
  
  // 輔助函數：首字母大寫
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // 輔助函數：獲取大阿爾卡納中文名稱
  const getMajorArcanaChineseName = (id) => {
    const chineseNames = [
      "愚者", "魔術師", "女祭司", "皇后", "皇帝", 
      "教皇", "戀人", "戰車", "力量", "隱士",
      "命運之輪", "正義", "倒吊人", "死神", "節制",
      "惡魔", "塔", "星星", "月亮", "太陽", 
      "審判", "世界"
    ];
    return chineseNames[id];
  };
  
  // 輔助函數：獲取小阿爾卡納牌面數字轉換
  const getCardRankName = (number) => {
    switch(number) {
      case 1: return "Ace";
      case 11: return "Page";
      case 12: return "Knight";
      case 13: return "Queen";
      case 14: return "King";
      default: return number.toString();
    }
  };
  
  // 輔助函數：獲取花色的顯示名稱
  const getSuitDisplayName = (suit) => {
    switch(suit.toLowerCase()) {
      case 'cups': return "Cups";
      case 'pents': return "Pentacles"; // 所有 'pents' 顯示為 "Pentacles"
      case 'swords': return "Swords";
      case 'wands': return "Wands";
      default: return suit.charAt(0).toUpperCase() + suit.slice(1);
    }
  };
  
  // 輔助函數：獲取大阿爾卡納牌的名稱
  const getMajorArcanName = (id) => {
    const names = [
      'fool', 'magician', 'high_priestess', 'empress', 'emperor',
      'hierophant', 'lovers', 'chariot', 'strength', 'hermit',
      'wheel_of_fortune', 'justice', 'hanged_man', 'death', 'temperance',
      'devil', 'tower', 'star', 'moon', 'sun',
      'judgement', 'world'
    ];
    return names[id];
  };
  
  // 輔助函數：根據 ID 計算小阿爾卡納牌的類型和數字
  const getMinorArcanaDetails = (id) => {
    // 減去22因為前面是22張大阿爾卡納牌
    const minorId = id - 22;
    const suits = ['cups', 'pents', 'swords', 'wands']; // 確保直接使用 'pents'
    const suitIndex = Math.floor(minorId / 14); // 每種花色14張牌
    const number = (minorId % 14) + 1; // 牌面數值 (1-14)
    
    console.log(`卡片ID ${id} 轉換: minorId=${minorId}, suitIndex=${suitIndex}, number=${number}`);
    
    return { 
      suit: suits[suitIndex], 
      number: number 
    };
  };
  
  // 獲取卡片圖像路徑
  const getCardFace = (card) => {
    // 如果是卡背或未定義的卡牌，返回卡背
    if (!card) return '/assets/tarot/back.png';
    
    // 大阿爾卡納 (0-21)
    if (card.id < 22) {
      // 格式化索引，確保 00, 01, 02 等
      const formattedIndex = String(card.id).padStart(2, '0');
      return `/assets/tarot/major/rws_tarot_${formattedIndex}_${getMajorArcanName(card.id)}.jpg`;
    } 
    // 小阿爾卡納
    else {
      const { suit, number } = getMinorArcanaDetails(card.id);
      
      // 添加調試日誌 (可選，幫助識別問題)
      console.log(`Card ID: ${card.id}, Suit: ${suit}, Number: ${number}`);
      
      // 根據花色和數字構建路徑名稱
      // 注意：花色是複數形式，數字需要格式化為2位數
      const formattedNumber = String(number).padStart(2, '0');
      
      // 特別處理星幣皇后 (檢查是否是星幣皇后)
      if (suit === 'pents' && number === 13) {
        console.log("檢測到星幣皇后，使用特定路徑");
        // 直接返回圖片對象（如果有問題可以調整）
        return `/assets/tarot/minor/pents/pents13.jpg`;
      }
      
      return `/assets/tarot/minor/${suit}/${suit}${formattedNumber}.jpg`;
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
  
  // 回到預備頁
  const handleReturnToIntro = () => {
    navigate('/intro');
  };
  
  // 回到首頁
  const handleReturnToHome = () => {
    navigate('/');
  };
  
  // 改進獲取卡片含義的函數
  const getCardMeaning = (card, type) => {
    const description = getCardDescription(card);
    if (!description) {
      console.warn(`找不到卡片 ID=${card.id} 的描述資料`);
      return null;
    }
    
    console.log(`獲取卡片含義: ID=${card.id}, 類型=${type}, 卡片名稱=${description.name || description.zh}`);
    console.log('卡片描述資料:', JSON.stringify(description, null, 2));
    
    const position = card.reversed ? 'reversed' : 'upright';
    
    // 確保該位置有資料
    if (!description[position]) {
      console.warn(`卡片 ${description.name || description.zh} 缺少 ${position} 位置的資料`);
      return null;
    }
    
    // 獲取指定類型的資料
    const text = description[position][type];
    
    if (!text) {
      console.warn(`卡片 ${description.name || description.zh} 的 ${position}.${type} 資料缺失`);
      return null;
    }
    
    return text;
  };
  
  // 獲取卡片名稱（多語言支持）
  const getCardName = (card, description, language) => {
    if (!description) {
      if (card.id < 22) {
        // 如果沒找到描述但知道是大阿爾卡納牌，返回標準名稱
        return language === 'en' 
          ? getMajorArcanaEnglishName(card.id) 
          : getMajorArcanaChineseName(card.id);
      } else {
        // 如果是小阿爾卡納牌，構建名稱
        const { suit, number } = getMinorArcanaDetails(card.id);
        return language === 'en'
          ? `${getCardRankName(number)} of ${getSuitDisplayName(suit)}`
          : getMinorArcanaChineseName(suit, number);
      }
    }
    
    // 如果有描述，從描述中提取名稱
    return language === 'en' ? description.name : (description.zh || description.name);
  };
  
  // 獲取大阿爾卡納英文全名
  const getMajorArcanaEnglishName = (id) => {
    const majorNames = [
      "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", 
      "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
      "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
      "The Devil", "The Tower", "The Star", "The Moon", "The Sun", 
      "Judgement", "The World"
    ];
    return majorNames[id];
  };
  
  // 獲取小阿爾卡納中文名稱
  const getMinorArcanaChineseName = (suit, number) => {
    const suitNames = {
      'cups': '聖杯',
      'pents': '星幣',      // 只保留 'pents' 這一種
      'swords': '寶劍',
      'wands': '權杖'
    };
    
    // 使用數字而不是英文單字
    const suitName = suitNames[suit] || suit;
    
    // 對於數字牌 (1-10)，直接使用數字
    if (number >= 1 && number <= 10) {
      return `${suitName}${number}`;
    } 
    // 對於宮廷牌，使用對應的中文名稱
    else {
      const rankNames = {
        11: '侍者',
        12: '騎士',
        13: '皇后',
        14: '國王'
      };
      return `${suitName}${rankNames[number]}`;
    }
  };
  
  // 獲取卡片圖片URL
  const getCardImageUrl = (card) => {
    // 使用您專案的圖片映射邏輯
    return tarotImageMap[getCardFace(card)] || getCardFace(card);
  };
  
  // 更新卡片渲染部分

  // 添加 getCardDebugInfo 函數以獲取調試信息
  const getCardDebugInfo = (card) => {
    let debugInfo = `ID: ${card.id}, ${card.reversed ? '逆位' : '正位'}`;
    
    if (card.id < 22) {
      debugInfo += ` (大阿爾卡納)`;
    } else {
      const { suit, number } = getMinorArcanaDetails(card.id);
      debugInfo += ` (${suit} ${number})`;
    }
    
    return debugInfo;
  };

  return (
    <div className="reading-page">
      <div className="reading-header">
        <h1 className="reading-title">{getReadingTitle()}</h1>
        {/* 移除重複的語言切換按鈕 */}
      </div>
      
      <div className="reading-container">
        <div className={`cards-spread spread-${cardCount} ${isLoaded ? 'loaded' : ''}`}>
          {drawnCards.map((card, index) => {
            const posLabel = t(`reading.position.${spread[index]}`);
            const description = getCardDescription(card);
            
            // 獲取卡片名稱（可能需要從不同來源）
            let cardName;
            if (description) {
              cardName = i18n.language === 'en' ? description.name : (description.zh || description.name);
            } else if (card.id < 22) {
              // 如果沒有找到描述，但知道是大阿爾卡納，使用預設名稱
              const majorNames = {
                en: ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", 
                "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
                "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
                "The Devil", "The Tower", "The Star", "The Moon", "The Sun", 
                "Judgement", "The World"],
                zh: ["愚者", "魔術師", "女祭司", "皇后", "皇帝", 
                "教皇", "戀人", "戰車", "力量", "隱士",
                "命運之輪", "正義", "倒吊人", "死神", "節制",
                "惡魔", "塔", "星星", "月亮", "太陽", 
                "審判", "世界"]
              };
              cardName = i18n.language === 'en' ? majorNames.en[card.id] : majorNames.zh[card.id];
            } else {
              // 小阿爾卡納預設名稱
              const { suit, number } = getMinorArcanaDetails(card.id);
              const suitNames = {
                'cups': { en: 'Cups', zh: '聖杯' },
                'pents': { en: 'Pentacles', zh: '星幣' }, // 只保留 'pents' 這一種
                'swords': { en: 'Swords', zh: '寶劍' },
                'wands': { en: 'Wands', zh: '權杖' }
              };
              
              cardName = i18n.language === 'en' 
                ? `${number} of ${suitNames[suit].en}`
                : `${suitNames[suit].zh}${number}`;
            }
            
            // 獲取核心含義和建議
            const coreMeaning = getCardMeaning(card, 'core');
            const adviceMeaning = getCardMeaning(card, 'advice');
            
            return (
              <div key={index} className="card-position" style={{'--delay': `${index * 0.2}s`}}>
                <h3 className="position-title">
                  {posLabel}
                  {cardCount === 6 && <span className="position-number">{index + 1}</span>}
                </h3>
                
                <div className="card-container">
                  <div className={`card ${card.reversed ? 'reversed' : ''}`}>
                    <img 
                      src={getCardImageUrl(card)} 
                      alt={cardName} 
                      className="card-image" 
                    />
                    <div className="card-label">
                      {card.reversed && <span className="reversed-tag">{t('reading.reversed')}</span>}
                    </div>
                  </div>
                  
                  <div className="card-interpretation">
                    <h4 className="card-name">
                      {cardName}
                      {card.reversed && ` (${t('reading.reversed')})`}
                    </h4>
                    
                    <p className="position-explanation">
                      <span className="position-label">{t('reading.positionMeaning')}:</span> {posLabel}
                    </p>
                    
                    <div className="card-meaning">
                      <div className="meaning-section">
                        <h5>{t('reading.coreMeaning')}</h5>
                        {coreMeaning ? (
                          <p>{coreMeaning}</p>
                        ) : (
                          <p className="missing-data">
                            {t('reading.missingData')} 
                            <span className="card-debug-info">{getCardDebugInfo(card)}</span>
                          </p>
                        )}
                      </div>
                      
                      <div className="meaning-section">
                        <h5>{t('reading.advice')}</h5>
                        {adviceMeaning ? (
                          <p>{adviceMeaning}</p>
                        ) : (
                          <p className="missing-data">
                            {t('reading.missingAdviceData')}
                            <span className="card-debug-info">{getCardDebugInfo(card)}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="reading-actions">
          <button 
            className="reading-action-btn draw-again-btn" 
            onClick={handleReturnToIntro}
          >
            {t('reading.drawAgain')}
          </button>
          <button 
            className="reading-action-btn home-btn" 
            onClick={handleReturnToHome}
          >
            {t('reading.returnHome')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reading;