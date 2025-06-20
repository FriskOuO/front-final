import React, { useState, useEffect } from 'react';
import CardDisplay from './CardDisplay';
import { drawCards } from '../data/tarotCards';
import { useTranslation } from 'react-i18next';
import './DrawArea.css'; // 假設您會建立對應的 CSS 檔案

const DrawArea = ({ cardCount = 3, onDrawComplete }) => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (cardCount > 0) {
      handleDrawCards();
    }
  }, [cardCount]);

  const handleDrawCards = () => {
    setIsDrawing(true);
    
    // 模擬抽牌動畫的過程
    setTimeout(() => {
      const cards = drawCards(cardCount);
      setDrawnCards(cards);
      setIsDrawing(false);
      
      // 如果有傳入回呼函數，通知父元件抽牌完成
      if (onDrawComplete) {
        onDrawComplete(cards);
      }
    }, 1500); // 1.5秒後顯示結果
  };

  if (isDrawing) {
    return <div className="drawing-animation">{t('draw.drawing')}</div>;
  }

  return (
    <div className="draw-area">
      <div className="cards-container">
        {drawnCards.map((card, index) => (
          <CardDisplay key={`${card.id}-${index}`} card={card} />
        ))}
      </div>
      
      {drawnCards.length > 0 && (
        <button className="redraw-button" onClick={handleDrawCards}>
          {t('draw.redraw')}
        </button>
      )}
    </div>
  );
};

export default DrawArea;