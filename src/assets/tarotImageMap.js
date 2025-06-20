// 導入主要牌組圖片
import major00 from './tarot/major/rws_tarot_00_fool.jpg';
import major01 from './tarot/major/rws_tarot_01_magician.jpg';
import major02 from './tarot/major/rws_tarot_02_high_priestess.jpg';
import major03 from './tarot/major/rws_tarot_03_empress.jpg';
import major04 from './tarot/major/rws_tarot_04_emperor.jpg';
import major05 from './tarot/major/rws_tarot_05_hierophant.jpg';
import major06 from './tarot/major/rws_tarot_06_lovers.jpg';
import major07 from './tarot/major/rws_tarot_07_chariot.jpg';
import major08 from './tarot/major/rws_tarot_08_strength.jpg';
import major09 from './tarot/major/rws_tarot_09_hermit.jpg';
import major10 from './tarot/major/rws_tarot_10_wheel_of_fortune.jpg';
import major11 from './tarot/major/rws_tarot_11_justice.jpg';
import major12 from './tarot/major/rws_tarot_12_hanged_man.jpg';
import major13 from './tarot/major/rws_tarot_13_death.jpg';
import major14 from './tarot/major/rws_tarot_14_temperance.jpg';
import major15 from './tarot/major/rws_tarot_15_devil.jpg';
import major16 from './tarot/major/rws_tarot_16_tower.jpg';
import major17 from './tarot/major/rws_tarot_17_star.jpg';
import major18 from './tarot/major/rws_tarot_18_moon.jpg';
import major19 from './tarot/major/rws_tarot_19_sun.jpg';
import major20 from './tarot/major/rws_tarot_20_judgement.jpg';
import major21 from './tarot/major/rws_tarot_21_world.jpg';

// 導入杯子牌組
import cups01 from './tarot/minor/cups/cups01.jpg';
import cups02 from './tarot/minor/cups/cups02.jpg';
import cups03 from './tarot/minor/cups/cups03.jpg';
import cups04 from './tarot/minor/cups/cups04.jpg';
import cups05 from './tarot/minor/cups/cups05.jpg';
import cups06 from './tarot/minor/cups/cups06.jpg';
import cups07 from './tarot/minor/cups/cups07.jpg';
import cups08 from './tarot/minor/cups/cups08.jpg';
import cups09 from './tarot/minor/cups/cups09.jpg';
import cups10 from './tarot/minor/cups/cups10.jpg';
import cups11 from './tarot/minor/cups/cups11.jpg';
import cups12 from './tarot/minor/cups/cups12.jpg';
import cups13 from './tarot/minor/cups/cups13.jpg';
import cups14 from './tarot/minor/cups/cups14.jpg';

// 導入劍牌組
import swords01 from './tarot/minor/swords/swords01.jpg';
import swords02 from './tarot/minor/swords/swords02.jpg';
import swords03 from './tarot/minor/swords/swords03.jpg';
import swords04 from './tarot/minor/swords/swords04.jpg';
import swords05 from './tarot/minor/swords/swords05.jpg';
import swords06 from './tarot/minor/swords/swords06.jpg';
import swords07 from './tarot/minor/swords/swords07.jpg';
import swords08 from './tarot/minor/swords/swords08.jpg';
import swords09 from './tarot/minor/swords/swords09.jpg';
import swords10 from './tarot/minor/swords/swords10.jpg';
import swords11 from './tarot/minor/swords/swords11.jpg';
import swords12 from './tarot/minor/swords/swords12.jpg';
import swords13 from './tarot/minor/swords/swords13.jpg';
import swords14 from './tarot/minor/swords/swords14.jpg';

// 導入錢幣牌組
import pents01 from './tarot/minor/pents/pents01.jpg';
import pents02 from './tarot/minor/pents/pents02.jpg';
import pents03 from './tarot/minor/pents/pents03.jpg';
import pents04 from './tarot/minor/pents/pents04.jpg';
import pents05 from './tarot/minor/pents/pents05.jpg';
import pents06 from './tarot/minor/pents/pents06.jpg';
import pents07 from './tarot/minor/pents/pents07.jpg';
import pents08 from './tarot/minor/pents/pents08.jpg';
import pents09 from './tarot/minor/pents/pents09.jpg';
import pents10 from './tarot/minor/pents/pents10.jpg';
import pents11 from './tarot/minor/pents/pents11.jpg';
import pents12 from './tarot/minor/pents/pents12.jpg';
import pents13 from './tarot/minor/pents/pents13.jpg';
import pents14 from './tarot/minor/pents/pents14.jpg';

// 導入權杖牌組
import wands01 from './tarot/minor/wands/wands01.jpg';
import wands02 from './tarot/minor/wands/wands02.jpg';
import wands03 from './tarot/minor/wands/wands03.jpg';
import wands04 from './tarot/minor/wands/wands04.jpg';
import wands05 from './tarot/minor/wands/wands05.jpg';
import wands06 from './tarot/minor/wands/wands06.jpg';
import wands07 from './tarot/minor/wands/wands07.jpg';
import wands08 from './tarot/minor/wands/wands08.jpg';
import wands09 from './tarot/minor/wands/wands09.jpg';
import wands10 from './tarot/minor/wands/wands10.jpg';
import wands11 from './tarot/minor/wands/wands11.jpg';
import wands12 from './tarot/minor/wands/wands12.jpg';
import wands13 from './tarot/minor/wands/wands13.jpg';
import wands14 from './tarot/minor/wands/wands14.jpg';

// 導入牌背圖片
import cardBack from './tarot/back.png';

// 創建映射對象，將原路徑映射到導入的圖片
const tarotImageMap = {
  // 主要牌組
  '/assets/tarot/major/rws_tarot_00_fool.jpg': major00,
  '/assets/tarot/major/rws_tarot_01_magician.jpg': major01,
  '/assets/tarot/major/rws_tarot_02_high_priestess.jpg': major02,
  '/assets/tarot/major/rws_tarot_03_empress.jpg': major03,
  '/assets/tarot/major/rws_tarot_04_emperor.jpg': major04,
  '/assets/tarot/major/rws_tarot_05_hierophant.jpg': major05,
  '/assets/tarot/major/rws_tarot_06_lovers.jpg': major06,
  '/assets/tarot/major/rws_tarot_07_chariot.jpg': major07,
  '/assets/tarot/major/rws_tarot_08_strength.jpg': major08,
  '/assets/tarot/major/rws_tarot_09_hermit.jpg': major09,
  '/assets/tarot/major/rws_tarot_10_wheel_of_fortune.jpg': major10,
  '/assets/tarot/major/rws_tarot_11_justice.jpg': major11,
  '/assets/tarot/major/rws_tarot_12_hanged_man.jpg': major12,
  '/assets/tarot/major/rws_tarot_13_death.jpg': major13,
  '/assets/tarot/major/rws_tarot_14_temperance.jpg': major14,
  '/assets/tarot/major/rws_tarot_15_devil.jpg': major15,
  '/assets/tarot/major/rws_tarot_16_tower.jpg': major16,
  '/assets/tarot/major/rws_tarot_17_star.jpg': major17,
  '/assets/tarot/major/rws_tarot_18_moon.jpg': major18,
  '/assets/tarot/major/rws_tarot_19_sun.jpg': major19,
  '/assets/tarot/major/rws_tarot_20_judgement.jpg': major20,
  '/assets/tarot/major/rws_tarot_21_world.jpg': major21,
  
  // 杯子牌組
  '/assets/tarot/minor/cups/cups01.jpg': cups01,
  '/assets/tarot/minor/cups/cups02.jpg': cups02,
  '/assets/tarot/minor/cups/cups03.jpg': cups03,
  '/assets/tarot/minor/cups/cups04.jpg': cups04,
  '/assets/tarot/minor/cups/cups05.jpg': cups05,
  '/assets/tarot/minor/cups/cups06.jpg': cups06,
  '/assets/tarot/minor/cups/cups07.jpg': cups07,
  '/assets/tarot/minor/cups/cups08.jpg': cups08,
  '/assets/tarot/minor/cups/cups09.jpg': cups09,
  '/assets/tarot/minor/cups/cups10.jpg': cups10,
  '/assets/tarot/minor/cups/cups11.jpg': cups11,
  '/assets/tarot/minor/cups/cups12.jpg': cups12,
  '/assets/tarot/minor/cups/cups13.jpg': cups13,
  '/assets/tarot/minor/cups/cups14.jpg': cups14,
  
  // 劍牌組
  '/assets/tarot/minor/swords/swords01.jpg': swords01,
  '/assets/tarot/minor/swords/swords02.jpg': swords02,
  '/assets/tarot/minor/swords/swords03.jpg': swords03,
  '/assets/tarot/minor/swords/swords04.jpg': swords04,
  '/assets/tarot/minor/swords/swords05.jpg': swords05,
  '/assets/tarot/minor/swords/swords06.jpg': swords06,
  '/assets/tarot/minor/swords/swords07.jpg': swords07,
  '/assets/tarot/minor/swords/swords08.jpg': swords08,
  '/assets/tarot/minor/swords/swords09.jpg': swords09,
  '/assets/tarot/minor/swords/swords10.jpg': swords10,
  '/assets/tarot/minor/swords/swords11.jpg': swords11,
  '/assets/tarot/minor/swords/swords12.jpg': swords12,
  '/assets/tarot/minor/swords/swords13.jpg': swords13,
  '/assets/tarot/minor/swords/swords14.jpg': swords14,
  
  // 錢幣牌組
  '/assets/tarot/minor/pents/pents01.jpg': pents01,
  '/assets/tarot/minor/pents/pents02.jpg': pents02,
  '/assets/tarot/minor/pents/pents03.jpg': pents03,
  '/assets/tarot/minor/pents/pents04.jpg': pents04,
  '/assets/tarot/minor/pents/pents05.jpg': pents05,
  '/assets/tarot/minor/pents/pents06.jpg': pents06,
  '/assets/tarot/minor/pents/pents07.jpg': pents07,
  '/assets/tarot/minor/pents/pents08.jpg': pents08,
  '/assets/tarot/minor/pents/pents09.jpg': pents09,
  '/assets/tarot/minor/pents/pents10.jpg': pents10,
  '/assets/tarot/minor/pents/pents11.jpg': pents11,
  '/assets/tarot/minor/pents/pents12.jpg': pents12,
  '/assets/tarot/minor/pents/pents13.jpg': pents13,
  '/assets/tarot/minor/pents/pents14.jpg': pents14,
  
  // 權杖牌組
  '/assets/tarot/minor/wands/wands01.jpg': wands01,
  '/assets/tarot/minor/wands/wands02.jpg': wands02,
  '/assets/tarot/minor/wands/wands03.jpg': wands03,
  '/assets/tarot/minor/wands/wands04.jpg': wands04,
  '/assets/tarot/minor/wands/wands05.jpg': wands05,
  '/assets/tarot/minor/wands/wands06.jpg': wands06,
  '/assets/tarot/minor/wands/wands07.jpg': wands07,
  '/assets/tarot/minor/wands/wands08.jpg': wands08,
  '/assets/tarot/minor/wands/wands09.jpg': wands09,
  '/assets/tarot/minor/wands/wands10.jpg': wands10,
  '/assets/tarot/minor/wands/wands11.jpg': wands11,
  '/assets/tarot/minor/wands/wands12.jpg': wands12,
  '/assets/tarot/minor/wands/wands13.jpg': wands13,
  '/assets/tarot/minor/wands/wands14.jpg': wands14,
  
  // 牌背圖片
  '/assets/tarot/back.png': cardBack
};

export default tarotImageMap;