import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { tarotCards } from '../data/tarotCards';
import tarotImageMap from '../assets/tarotImageMap'; // 引入圖片映射
import './TarotGuide.css';

const TarotGuide = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    // 直接使用 tarotCards，不修改圖片路徑
    setCards(tarotCards);
    
    // 設置短暫的加載狀態以提高用戶體驗
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // 根據過濾條件過濾塔羅牌
  const filteredCards = cards.filter(card => {
    // 依照類型過濾
    if (filter !== 'all') {
      if (filter === 'major' && card.arcana !== 'major') return false;
      if (filter === 'cups' && card.suit !== 'cups') return false;
      if (filter === 'swords' && card.suit !== 'swords') return false;
      if (filter === 'pentacles' && card.suit !== 'pentacles') return false;
      if (filter === 'wands' && card.suit !== 'wands') return false;
    }
    
    // 依照搜尋文字過濾
    if (search) {
      const searchLower = search.toLowerCase();
      const nameEn = card.name.en.toLowerCase();
      const nameZh = card.name.zh.toLowerCase();
      
      return nameEn.includes(searchLower) || nameZh.includes(searchLower);
    }
    
    return true;
  });

  // 根據牌組和編號排序
  const sortedCards = [...filteredCards].sort((a, b) => {
    // 先依牌組排序
    if (a.arcana !== b.arcana) {
      return a.arcana === 'major' ? -1 : 1;
    }
    
    // 再依編號或牌面大小排序
    let aNum = parseInt(a.id.split('_')[1]) || 0;
    let bNum = parseInt(b.id.split('_')[1]) || 0;
    return aNum - bNum;
  });

  // 分組顯示
  const majorArcana = sortedCards.filter(card => card.arcana === 'major');
  const cups = sortedCards.filter(card => card.suit === 'cups');
  const swords = sortedCards.filter(card => card.suit === 'swords');
  const pentacles = sortedCards.filter(card => card.suit === 'pentacles');
  const wands = sortedCards.filter(card => card.suit === 'wands');

  // 修改這個輔助函數，正確處理錢幣牌目錄
  const convertImagePath = (path) => {
    // 1. 將 cups_01 轉換為 cups01
    let convertedPath = path.replace(/(cups|swords|wands)_(\d+)/g, '$1$2');
    
    // 2. 將 pentacles_01 轉換為 pents01，同時修改目錄路徑
    convertedPath = convertedPath.replace(/pentacles\/pentacles_(\d+)/g, 'pents/pents$1');
    
    // 3. 將 /assets/ 轉換為 ./
    convertedPath = convertedPath.replace('/assets/', './');
    
    return convertedPath;
  };

  // 卡片渲染函數
  const renderCardItem = (card) => {
    console.log("Card image path:", card.image);
    
    // 轉換後的路徑用於調試
    const convertedPath = convertImagePath(card.image);
    console.log("Converted path:", convertedPath);
    
    // 正確處理圖片路徑，優先使用 tarotImageMap 中的映射
    let imgSrc = tarotImageMap[card.image];
    
    // 如果找不到圖片，嘗試使用轉換後的路徑格式
    if (!imgSrc) {
      // 處理錢幣牌路徑
      if (card.suit === 'pentacles') {
        const match = card.image.match(/pentacles_(\d+)/);
        if (match && match[1]) {
          const number = match[1];
          const newKey = `/assets/tarot/minor/pents/pents${number}.jpg`;
          imgSrc = tarotImageMap[newKey];
        }
      } 
      // 處理其他小阿爾卡納牌路徑
      else if (card.suit) {
        const suit = card.suit;  // cups, swords, wands
        const match = card.image.match(/_(\d+)/);
        if (match && match[1]) {
          const number = match[1];
          const newKey = `/assets/tarot/minor/${suit}/${suit}${number}.jpg`;
          imgSrc = tarotImageMap[newKey];
        }
      }
    }
    
    return (
      <div key={card.id} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {/* 標題放在上方 */}
            <div className="card-title-top">
              <h3>{i18n.language === 'en' ? card.name.en : card.name.zh}</h3>
            </div>
            
            {/* 圖片容器 */}
            <div className="card-image-container">
              <img 
                src={imgSrc || null}
                alt={i18n.language === 'en' ? card.name.en : card.name.zh}
                className="card-image"
                onError={(e) => {
                  e.target.onerror = null;
                  console.error('圖片載入失敗:', card.image);
                  e.target.style.background = '#1c1c2e';
                  e.target.style.height = '100%';
                  e.target.style.display = 'flex';
                  e.target.style.alignItems = 'center';
                  e.target.style.justifyContent = 'center';
                  
                  // 添加一個佔位文字
                  const placeholder = document.createElement('div');
                  placeholder.textContent = i18n.language === 'en' ? card.name.en : card.name.zh;
                  placeholder.style.color = '#daa520';
                  placeholder.style.fontSize = '1rem';
                  placeholder.style.padding = '10px';
                  placeholder.style.textAlign = 'center';
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
            </div>
          </div>
          
          <div className="flip-card-back">
            <h3 className="card-title">
              {i18n.language === 'en' ? card.name.en : card.name.zh}
            </h3>
            <div className="card-meanings">
              <div className="meaning-section">
                <h4>{t('guide.upright')}</h4>
                <p>{i18n.language === 'en' 
                  ? (card.meanings.upright.en.length > 100 
                     ? card.meanings.upright.en.substring(0, 100) + '...' 
                     : card.meanings.upright.en)
                  : (card.meanings.upright.zh.length > 50 
                     ? card.meanings.upright.zh.substring(0, 50) + '...' 
                     : card.meanings.upright.zh)}
                </p>
              </div>
              <div className="meaning-section">
                <h4>{t('guide.reversed')}</h4>
                <p>{i18n.language === 'en'
                  ? (card.meanings.reversed.en.length > 100
                     ? card.meanings.reversed.en.substring(0, 100) + '...'
                     : card.meanings.reversed.en)
                  : (card.meanings.reversed.zh.length > 50
                     ? card.meanings.reversed.zh.substring(0, 50) + '...'
                     : card.meanings.reversed.zh)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tarot-guide-container">
      <div className="search-filter-container">
        {/* 搜尋框 */}
        <div className="search-box">
          <input
            type="text"
            placeholder={t('guide.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 過濾按鈕 */}
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t('guide.allCards')}
          </button>
          <button
            className={`filter-button ${filter === 'major' ? 'active' : ''}`}
            onClick={() => setFilter('major')}
          >
            {t('guide.majorArcana')}
          </button>
          <button
            className={`filter-button ${filter === 'cups' ? 'active' : ''}`}
            onClick={() => setFilter('cups')}
          >
            {t('guide.cups')}
          </button>
          <button
            className={`filter-button ${filter === 'swords' ? 'active' : ''}`}
            onClick={() => setFilter('swords')}
          >
            {t('guide.swords')}
          </button>
          <button
            className={`filter-button ${filter === 'pentacles' ? 'active' : ''}`}
            onClick={() => setFilter('pentacles')}
          >
            {t('guide.pentacles')}
          </button>
          <button
            className={`filter-button ${filter === 'wands' ? 'active' : ''}`}
            onClick={() => setFilter('wands')}
          >
            {t('guide.wands')}
          </button>
        </div>
      </div>
      
      {loading ? (
        // 載入中顯示
        <div className="loading-container">
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
          <p className="loading-text">{t('common.loading')}</p>
        </div>
      ) : (
        // 其餘卡片展示邏輯保持不變
        <div className="guide-content">
          {/* 大阿爾卡納 */}
          {(filter === 'all' || filter === 'major') && majorArcana.length > 0 && (
            <div className="card-section">
              <h2 className="section-title">{t('guide.majorArcana')}</h2>
              <div className="cards-grid">
                {majorArcana.map(renderCardItem)}
              </div>
            </div>
          )}

          {/* 聖杯牌組 */}
          {(filter === 'all' || filter === 'cups') && cups.length > 0 && (
            <div className="card-section">
              <h2 className="section-title">{t('guide.cups')}</h2>
              <div className="cards-grid">
                {cups.map(renderCardItem)}
              </div>
            </div>
          )}

          {/* 寶劍牌組 */}
          {(filter === 'all' || filter === 'swords') && swords.length > 0 && (
            <div className="card-section">
              <h2 className="section-title">{t('guide.swords')}</h2>
              <div className="cards-grid">
                {swords.map(renderCardItem)}
              </div>
            </div>
          )}

          {/* 錢幣牌組 */}
          {(filter === 'all' || filter === 'pentacles') && pentacles.length > 0 && (
            <div className="card-section">
              <h2 className="section-title">{t('guide.pentacles')}</h2>
              <div className="cards-grid">
                {pentacles.map(renderCardItem)}
              </div>
            </div>
          )}

          {/* 權杖牌組 */}
          {(filter === 'all' || filter === 'wands') && wands.length > 0 && (
            <div className="card-section">
              <h2 className="section-title">{t('guide.wands')}</h2>
              <div className="cards-grid">
                {wands.map(renderCardItem)}
              </div>
            </div>
          )}

          {filteredCards.length === 0 && (
            <div className="no-results">
              <p>{t('guide.noResults')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TarotGuide;