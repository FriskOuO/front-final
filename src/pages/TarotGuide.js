import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tarotCards } from '../data/tarotCards';
import CardDisplay from '../components/CardDisplay';
import './TarotGuide.css';

const TarotGuide = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all'); // 'all', 'major', 'cups', 'swords', 'pentacles', 'wands'
  const [search, setSearch] = useState('');

  // 根據過濾條件過濾塔羅牌
  const filteredCards = tarotCards.filter(card => {
    // 依照類型過濾
    if (filter !== 'all') {
      if (filter === 'major' && card.arcana !== 'major') return false;
      if (filter !== 'major' && card.suit !== filter) return false;
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

  // 根據牌組分組顯示
  const groupedCards = {
    major: filteredCards.filter(card => card.arcana === 'major'),
    cups: filteredCards.filter(card => card.suit === 'cups'),
    swords: filteredCards.filter(card => card.suit === 'swords'),
    pentacles: filteredCards.filter(card => card.suit === 'pentacles'),
    wands: filteredCards.filter(card => card.suit === 'wands')
  };

  return (
    <div className="tarot-guide-container">
      <div className="guide-header">
        <h1>{t('guide.title')}</h1>
        <p className="guide-intro">{t('guide.intro')}</p>
      </div>
      
      <div className="guide-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder={t('guide.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            {t('guide.allCards')}
          </button>
          <button 
            className={filter === 'major' ? 'active' : ''}
            onClick={() => setFilter('major')}
          >
            {t('guide.majorArcana')}
          </button>
          <button 
            className={filter === 'cups' ? 'active' : ''}
            onClick={() => setFilter('cups')}
          >
            {t('guide.cups')}
          </button>
          <button 
            className={filter === 'swords' ? 'active' : ''}
            onClick={() => setFilter('swords')}
          >
            {t('guide.swords')}
          </button>
          <button 
            className={filter === 'pentacles' ? 'active' : ''}
            onClick={() => setFilter('pentacles')}
          >
            {t('guide.pentacles')}
          </button>
          <button 
            className={filter === 'wands' ? 'active' : ''}
            onClick={() => setFilter('wands')}
          >
            {t('guide.wands')}
          </button>
        </div>
      </div>
      
      <div className="guide-content">
        {filter === 'all' ? (
          <>
            {Object.entries(groupedCards).map(([group, cards]) => (
              cards.length > 0 && (
                <div key={group} className="card-group">
                  <h2 className="group-title">{t(`guide.${group}`)}</h2>
                  <div className="cards-grid">
                    {cards.map((card, index) => (
                      <div key={`${card.id}-${index}`} className="card-item">
                        <CardDisplay card={{...card, isReversed: false}} />
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </>
        ) : (
          <div className="cards-grid">
            {filteredCards.map((card, index) => (
              <div key={`${card.id}-${index}`} className="card-item">
                <CardDisplay card={{...card, isReversed: false}} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotGuide;