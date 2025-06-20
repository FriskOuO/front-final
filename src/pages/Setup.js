// 這是假設的檔案路徑，請根據實際情況調整

// 在選擇頁面的表單提交或下一步按鈕處理函數中添加deckType參數
const handleNextStep = () => {
  navigate('/draw', {
    state: {
      cardCount: selectedCardCount,
      intent: userIntent,
      deckType: selectedDeckType // 'full' 或 'major'
    }
  });
};