import React from 'react';
import { useTranslation } from 'react-i18next';
import './CardDisplay.css';

const CardDisplay = ({ card }) => {
  const { t } = useTranslation();
  
  if (!card) return null;
  
  const { name, image, meanings, isReversed } = card;
  const position = isReversed ? 'reversed' : 'upright';

  // 使用佔位圖片作為替代
  const placeholderImage = "https://via.placeholder.com/300x500?text=Tarot+Card";

  return (
    <div className="card-display">
      <div className={`card-image-container ${isReversed ? 'reversed' : ''}`}>
        {/* 如果圖片存在就使用真實圖片，否則使用佔位圖片 */}
        <img 
          src={image || placeholderImage}
          alt={t(`cards.${card.id}.name`)} 
          className="card-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />
      </div>
      <div className="card-info">
        <h3 className="card-name">{t(`cards.${card.id}.name`)}</h3>
        <div className="card-position">
          {isReversed ? t('common.reversed') : t('common.upright')}
        </div>
        <div className="card-meaning">
          <p>{t(`cards.${card.id}.${position}`)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;