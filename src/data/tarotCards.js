export const tarotCards = [
  // 大阿爾克納牌 (Major Arcana)
  {
    id: 'major_00',
    name: { en: 'The Fool', zh: '愚人' },
    arcana: 'major',
    suit: null,
    // 使用字串路徑而不是 require
    image: '/assets/tarot/major/rws_tarot_00_fool.jpg',
    meanings: {
      upright: { en: 'New beginnings, innocence, spontaneity', zh: '新的開始，純真，自發性' },
      reversed: { en: 'Recklessness, risk-taking, foolishness', zh: '魯莽，冒險，愚蠢' }
    },
    isReversed: false
  },
  {
    id: 'major_01',
    name: { en: 'The Magician', zh: '魔術師' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_01_magician.jpg',
    meanings: {
      upright: { en: 'Manifestation, resourcefulness, power', zh: '實現，足智多謀，力量' },
      reversed: { en: 'Manipulation, poor planning, untapped talents', zh: '操縱，計劃不周，未開發的才能' }
    },
    isReversed: false
  },
  {
    id: 'major_02',
    name: { en: 'The High Priestess', zh: '女祭司' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_02_high_priestess.jpg',
    meanings: {
      upright: { en: 'Intuition, sacred knowledge, divine feminine', zh: '直覺，神聖知識，神聖女性' },
      reversed: { en: 'Secrets, disconnected from intuition, withdrawal', zh: '秘密，與直覺脫節，退縮' }
    },
    isReversed: false
  },
  {
    id: 'major_03',
    name: { en: 'The Empress', zh: '皇后' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_03_empress.jpg',
    meanings: {
      upright: { en: 'Femininity, beauty, nature, nurturing, abundance', zh: '女性氣質，美麗，自然，養育，豐盛' },
      reversed: { en: 'Creative block, dependence on others, emptiness', zh: '創意障礙，依賴他人，空虛' }
    },
    isReversed: false
  },
  {
    id: 'major_04',
    name: { en: 'The Emperor', zh: '皇帝' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_04_emperor.jpg',
    meanings: {
      upright: { en: 'Authority, structure, control, fatherhood', zh: '權威，結構，控制，父性' },
      reversed: { en: 'Domination, excessive control, rigidity, inflexibility', zh: '支配，過度控制，僵化，固執' }
    },
    isReversed: false
  },
  {
    id: 'major_05',
    name: { en: 'The Hierophant', zh: '教皇' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_05_hierophant.jpg',
    meanings: {
      upright: { en: 'Spiritual wisdom, tradition, conformity, morality', zh: '靈性智慧，傳統，遵循，道德' },
      reversed: { en: 'Rebellion, subversiveness, new approaches', zh: '反叛，顛覆，新方法' }
    },
    isReversed: false
  },
  {
    id: 'major_06',
    name: { en: 'The Lovers', zh: '戀人' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_06_lovers.jpg',
    meanings: {
      upright: { en: 'Love, harmony, relationships, values alignment', zh: '愛，和諧，關係，價值觀一致' },
      reversed: { en: 'Self-love, disharmony, imbalance, misalignment', zh: '自愛，不和諧，不平衡，不一致' }
    },
    isReversed: false
  },
  {
    id: 'major_07',
    name: { en: 'The Chariot', zh: '戰車' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_07_chariot.jpg',
    meanings: {
      upright: { en: 'Control, willpower, success, determination', zh: '控制，意志力，成功，決心' },
      reversed: { en: 'Lack of control, aggression, obstacles', zh: '缺乏控制，侵略，障礙' }
    },
    isReversed: false
  },
  {
    id: 'major_08',
    name: { en: 'Strength', zh: '力量' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_08_strength.jpg',
    meanings: {
      upright: { en: 'Courage, persuasion, influence, compassion', zh: '勇氣，說服力，影響力，同情心' },
      reversed: { en: 'Inner strength, self-doubt, low energy, weakness', zh: '內在力量，自我懷疑，能量不足，軟弱' }
    },
    isReversed: false
  },
  {
    id: 'major_09',
    name: { en: 'The Hermit', zh: '隱士' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_09_hermit.jpg',
    meanings: {
      upright: { en: 'Soul-searching, introspection, solitude, inner guidance', zh: '靈魂探索，內省，獨處，內在指引' },
      reversed: { en: 'Isolation, loneliness, withdrawal, rejection', zh: '孤立，孤獨，退縮，排斥' }
    },
    isReversed: false
  },
  {
    id: 'major_10',
    name: { en: 'Wheel of Fortune', zh: '命運之輪' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_10_wheel_of_fortune.jpg',
    meanings: {
      upright: { en: 'Change, cycles, inevitable fate, luck', zh: '變化，循環，不可避免的命運，運氣' },
      reversed: { en: 'Bad luck, resistance to change, breaking cycles', zh: '厄運，抗拒變化，打破循環' }
    },
    isReversed: false
  },
  {
    id: 'major_11',
    name: { en: 'Justice', zh: '正義' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_11_justice.jpg',
    meanings: {
      upright: { en: 'Justice, fairness, truth, cause and effect', zh: '公正，公平，真理，因果' },
      reversed: { en: 'Unfairness, dishonesty, lack of accountability', zh: '不公，不誠實，缺乏責任感' }
    },
    isReversed: false
  },
  {
    id: 'major_12',
    name: { en: 'The Hanged Man', zh: '倒吊人' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_12_hanged_man.jpg',
    meanings: {
      upright: { en: 'Surrender, new perspective, enlightenment', zh: '放下，新視角，開悟' },
      reversed: { en: 'Resistance, stalling, indecision', zh: '抗拒，拖延，猶豫不決' }
    },
    isReversed: false
  },
  {
    id: 'major_13',
    name: { en: 'Death', zh: '死神' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_13_death.jpg',
    meanings: {
      upright: { en: 'Endings, change, transformation, transition', zh: '結束，變化，轉變，過渡' },
      reversed: { en: 'Resistance to change, inability to move on', zh: '抗拒變化，無法向前' }
    },
    isReversed: false
  },
  {
    id: 'major_14',
    name: { en: 'Temperance', zh: '節制' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_14_temperance.jpg',
    meanings: {
      upright: { en: 'Balance, moderation, patience, purpose', zh: '平衡，節制，耐心，目的' },
      reversed: { en: 'Imbalance, excess, impatience', zh: '不平衡，過度，不耐煩' }
    },
    isReversed: false
  },
  {
    id: 'major_15',
    name: { en: 'The Devil', zh: '惡魔' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_15_devil.jpg',
    meanings: {
      upright: { en: 'Attachment, addiction, materialism, sexuality', zh: '依附，成癮，物質主義，性慾' },
      reversed: { en: 'Detachment, breaking free, power reclaimed', zh: '脫離，解脫，收回力量' }
    },
    isReversed: false
  },
  {
    id: 'major_16',
    name: { en: 'The Tower', zh: '塔' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_16_tower.jpg',
    meanings: {
      upright: { en: 'Sudden change, upheaval, chaos, revelation, awakening', zh: '突變，動蕩，混亂，啟示，覺醒' },
      reversed: { en: 'Fear of change, avoiding disaster, delaying the inevitable', zh: '恐懼變化，避免災難，延遲不可避免' }
    },
    isReversed: false
  },
  {
    id: 'major_17',
    name: { en: 'The Star', zh: '星星' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_17_star.jpg',
    meanings: {
      upright: { en: 'Hope, faith, purpose, renewal, spirituality', zh: '希望，信心，目的，更新，靈性' },
      reversed: { en: 'Lack of faith, despair, discouragement', zh: '缺乏信心，絕望，氣餒' }
    },
    isReversed: false
  },
  {
    id: 'major_18',
    name: { en: 'The Moon', zh: '月亮' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_18_moon.jpg',
    meanings: {
      upright: { en: 'Illusion, fear, anxiety, subconscious, intuition', zh: '幻覺，恐懼，焦慮，潛意識，直覺' },
      reversed: { en: 'Release of fear, repressed emotions, confusion', zh: '釋放恐懼，壓抑情緒，困惑' }
    },
    isReversed: false
  },
  {
    id: 'major_19',
    name: { en: 'The Sun', zh: '太陽' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_19_sun.jpg',
    meanings: {
      upright: { en: 'Joy, success, celebration, positivity, vitality', zh: '喜悅，成功，慶祝，積極，活力' },
      reversed: { en: 'Temporary depression, lack of success', zh: '暫時的沮喪，缺乏成功' }
    },
    isReversed: false
  },
  {
    id: 'major_20',
    name: { en: 'Judgement', zh: '審判' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_20_judgement.jpg',
    meanings: {
      upright: { en: 'Judgement, rebirth, inner calling, absolution', zh: '審判，重生，內在呼喚，赦免' },
      reversed: { en: 'Self-doubt, failure to learn lessons, self-judgement', zh: '自我懷疑，未能吸取教訓，自我批判' }
    },
    isReversed: false
  },
  {
    id: 'major_21',
    name: { en: 'The World', zh: '世界' },
    arcana: 'major',
    suit: null,
    image: '/assets/tarot/major/rws_tarot_21_world.jpg',
    meanings: {
      upright: { en: 'Completion, achievement, fulfillment, sense of belonging', zh: '完成，成就，實現，歸屬感' },
      reversed: { en: 'Incomplete, lack of closure, seeking personal closure', zh: '不完整，無法結束，尋求個人結束' }
    },
    isReversed: false
  },

  // 小阿爾克納牌 - 聖杯 (Cups)
  {
    id: 'cups_01',
    name: { en: 'Ace of Cups', zh: '聖杯一' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_01.jpg',
    meanings: {
      upright: { en: 'New feelings, intuition, intimacy, love', zh: '新的感受，直覺，親密，愛' },
      reversed: { en: 'Emotional loss, blocked creativity, emptiness', zh: '情感損失，創造力受阻，空虛' }
    },
    isReversed: false
  },
  {
    id: 'cups_02',
    name: { en: 'Two of Cups', zh: '聖杯二' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_02.jpg',
    meanings: {
      upright: { en: 'Unity, partnership, connection, attraction', zh: '統一，伙伴關係，連結，吸引力' },
      reversed: { en: 'Broken communication, tension, misalignment', zh: '溝通破裂，緊張，不一致' }
    },
    isReversed: false
  },
  {
    id: 'cups_03',
    name: { en: 'Three of Cups', zh: '聖杯三' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_03.jpg',
    meanings: {
      upright: { en: 'Celebration, friendship, creativity, community', zh: '慶祝，友誼，創造力，社區' },
      reversed: { en: 'Overindulgence, gossip, isolation', zh: '放縱過度，閒言碎語，孤立' }
    },
    isReversed: false
  },
  {
    id: 'cups_04',
    name: { en: 'Four of Cups', zh: '聖杯四' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_04.jpg',
    meanings: {
      upright: { en: 'Meditation, contemplation, apathy, reevaluation', zh: '冥想，沉思，冷漠，重新評估' },
      reversed: { en: 'Retreat, withdrawal, checking in for alignment', zh: '撤退，退縮，檢查是否一致' }
    },
    isReversed: false
  },
  {
    id: 'cups_05',
    name: { en: 'Five of Cups', zh: '聖杯五' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_05.jpg',
    meanings: {
      upright: { en: 'Loss, grief, disappointment, regret', zh: '損失，悲傷，失望，後悔' },
      reversed: { en: 'Acceptance, moving on, finding peace', zh: '接受，前進，找到平靜' }
    },
    isReversed: false
  },
  {
    id: 'cups_06',
    name: { en: 'Six of Cups', zh: '聖杯六' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_06.jpg',
    meanings: {
      upright: { en: 'Nostalgia, childhood memories, innocence, joy', zh: '懷舊，童年回憶，純真，喜悅' },
      reversed: { en: 'Living in the past, forgetting the present, naivety', zh: '生活在過去，忘記現在，天真' }
    },
    isReversed: false
  },
  {
    id: 'cups_07',
    name: { en: 'Seven of Cups', zh: '聖杯七' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_07.jpg',
    meanings: {
      upright: { en: 'Opportunities, choices, wishful thinking, illusion', zh: '機會，選擇，一廂情願，幻覺' },
      reversed: { en: 'Clarity, focus, making choices, commitment', zh: '清晰，專注，做出選擇，承諾' }
    },
    isReversed: false
  },
  {
    id: 'cups_08',
    name: { en: 'Eight of Cups', zh: '聖杯八' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_08.jpg',
    meanings: {
      upright: { en: 'Walking away, disillusionment, leaving behind', zh: '離開，幻滅，放下' },
      reversed: { en: 'Fear of change, fear of loss, staying in a bad situation', zh: '害怕改變，害怕失去，停留在壞處境' }
    },
    isReversed: false
  },
  {
    id: 'cups_09',
    name: { en: 'Nine of Cups', zh: '聖杯九' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_09.jpg',
    meanings: {
      upright: { en: 'Contentment, satisfaction, gratitude, wish come true', zh: '滿足，滿意，感恩，願望實現' },
      reversed: { en: 'Inner happiness, materialism, dissatisfaction', zh: '內在幸福，物質主義，不滿' }
    },
    isReversed: false
  },
  {
    id: 'cups_10',
    name: { en: 'Ten of Cups', zh: '聖杯十' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_10.jpg',
    meanings: {
      upright: { en: 'Divine love, harmony, alignment with community', zh: '神聖之愛，和諧，與社區一致' },
      reversed: { en: 'Broken home, domestic disharmony, external validation', zh: '破碎的家庭，家庭不和諧，外部驗證' }
    },
    isReversed: false
  },
  {
    id: 'cups_11',
    name: { en: 'Page of Cups', zh: '聖杯侍者' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_11.jpg',
    meanings: {
      upright: { en: 'Creative opportunities, curiosity, possibility, messenger', zh: '創意機會，好奇心，可能性，信使' },
      reversed: { en: 'Emotional immaturity, escapism, co-dependency', zh: '情感不成熟，現實逃避，共依存' }
    },
    isReversed: false
  },
  {
    id: 'cups_12',
    name: { en: 'Knight of Cups', zh: '聖杯騎士' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_12.jpg',
    meanings: {
      upright: { en: 'Creativity, romance, charm, following the heart', zh: '創造力，浪漫，魅力，跟隨內心' },
      reversed: { en: 'Moodiness, emotional instability', zh: '情緒波動，情感不穩定' }
    },
    isReversed: false
  },
  {
    id: 'cups_13',
    name: { en: 'Queen of Cups', zh: '聖杯皇后' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_13.jpg',
    meanings: {
      upright: { en: 'Compassionate, emotional, intuitive, sensitive', zh: '富有同情心，情感豐富，直覺性，敏感' },
      reversed: { en: 'Martyrdom, overly sensitive, smothering', zh: '犧牲主義，過度敏感，窒息' }
    },
    isReversed: false
  },
  {
    id: 'cups_14',
    name: { en: 'King of Cups', zh: '聖杯國王' },
    arcana: 'minor',
    suit: 'cups',
    image: '/assets/tarot/minor/cups/cups_14.jpg',
    meanings: {
      upright: { en: 'Emotional balance, compassion, calm diplomacy', zh: '情感平衡，同情，冷靜的外交手腕' },
      reversed: { en: 'Manipulation, moodiness, emotional disbalance', zh: '操控，情緒化，情感不平衡' }
    },
    isReversed: false
  },

  // 小阿爾克納牌 - 寶劍 (Swords)
  {
    id: 'swords_01',
    name: { en: 'Ace of Swords', zh: '寶劍一' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_01.jpg',
    meanings: {
      upright: { en: 'Breakthrough, clarity, sharp mind', zh: '突破，清晰，敏銳思維' },
      reversed: { en: 'Confusion, brutality, chaos', zh: '混亂，殘暴，無序' }
    },
    isReversed: false
  },
  {
    id: 'swords_02',
    name: { en: 'Two of Swords', zh: '寶劍二' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_02.jpg',
    meanings: {
      upright: { en: 'Difficult choices, indecision, stalemate', zh: '困難的選擇，優柔寡斷，僵局' },
      reversed: { en: 'Information overload, too many voices, confusion', zh: '資訊超載，太多聲音，困惑' }
    },
    isReversed: false
  },
  {
    id: 'swords_03',
    name: { en: 'Three of Swords', zh: '寶劍三' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_03.jpg',
    meanings: {
      upright: { en: 'Heartbreak, emotional pain, sorrow, grief', zh: '心碎，情感痛苦，悲傷，悲痛' },
      reversed: { en: 'Recovery, forgiveness, moving on', zh: '恢復，寬恕，向前邁進' }
    },
    isReversed: false
  },
  {
    id: 'swords_04',
    name: { en: 'Four of Swords', zh: '寶劍四' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_04.jpg',
    meanings: {
      upright: { en: 'Rest, restoration, contemplation, recuperation', zh: '休息，恢復，沉思，康復' },
      reversed: { en: 'Restlessness, burnout, stress, no relaxation', zh: '不安，精疲力竭，壓力，無法放鬆' }
    },
    isReversed: false
  },
  {
    id: 'swords_05',
    name: { en: 'Five of Swords', zh: '寶劍五' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_05.jpg',
    meanings: {
      upright: { en: 'Conflict, tension, loss, defeat, win at all costs', zh: '衝突，緊張，損失，失敗，不惜一切代價贏' },
      reversed: { en: 'Reconciliation, making amends, compromise', zh: '和解，彌補，妥協' }
    },
    isReversed: false
  },
  {
    id: 'swords_06',
    name: { en: 'Six of Swords', zh: '寶劍六' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_06.jpg',
    meanings: {
      upright: { en: 'Transition, change, rite of passage, release', zh: '過渡，變化，成長儀式，釋放' },
      reversed: { en: 'Emotional baggage, unresolved issues, resisting transition', zh: '情感包袱，未解決的問題，抗拒過渡' }
    },
    isReversed: false
  },
  {
    id: 'swords_07',
    name: { en: 'Seven of Swords', zh: '寶劍七' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_07.jpg',
    meanings: {
      upright: { en: 'Deception, trickery, tactics, strategy', zh: '欺騙，詭計，策略，戰略' },
      reversed: { en: 'Confession, conscience, truth, exposure', zh: '懺悔，良心，真相，暴露' }
    },
    isReversed: false
  },
  {
    id: 'swords_08',
    name: { en: 'Eight of Swords', zh: '寶劍八' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_08.jpg',
    meanings: {
      upright: { en: 'Imprisonment, restriction, limitation, victimhood', zh: '囚禁，限制，局限，受害者心態' },
      reversed: { en: 'Freedom, taking control, finding solutions', zh: '自由，掌控，尋找解決方案' }
    },
    isReversed: false
  },
  {
    id: 'swords_09',
    name: { en: 'Nine of Swords', zh: '寶劍九' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_09.jpg',
    meanings: {
      upright: { en: 'Anxiety, worry, fear, depression, nightmares', zh: '焦慮，擔憂，恐懼，抑鬱，噩夢' },
      reversed: { en: 'Recovery from anxiety, finding perspective', zh: '從焦慮中恢復，找到視角' }
    },
    isReversed: false
  },
  {
    id: 'swords_10',
    name: { en: 'Ten of Swords', zh: '寶劍十' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_10.jpg',
    meanings: {
      upright: { en: 'Painful endings, deep wounds, betrayal, loss, crisis', zh: '痛苦的結束，深層創傷，背叛，損失，危機' },
      reversed: { en: 'Recovery, regeneration, healing, getting back up', zh: '恢復，再生，治癒，站起來' }
    },
    isReversed: false
  },
  {
    id: 'swords_11',
    name: { en: 'Page of Swords', zh: '寶劍侍者' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_11.jpg',
    meanings: {
      upright: { en: 'New ideas, curiosity, mental energy, communication', zh: '新想法，好奇心，精神能量，溝通' },
      reversed: { en: 'Hasty action, impulsive communication, scatterbrain', zh: '倉促行動，衝動溝通，思緒紛亂' }
    },
    isReversed: false
  },
  {
    id: 'swords_12',
    name: { en: 'Knight of Swords', zh: '寶劍騎士' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_12.jpg',
    meanings: {
      upright: { en: 'Action, ambition, drive to succeed, fast-thinking', zh: '行動，野心，成功的動力，快速思考' },
      reversed: { en: 'Burnout, recklessness, impatience, aggression', zh: '精疲力竭，魯莽，不耐煩，攻擊性' }
    },
    isReversed: false
  },
  {
    id: 'swords_13',
    name: { en: 'Queen of Swords', zh: '寶劍皇后' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_13.jpg',
    meanings: {
      upright: { en: 'Independent, unbiased judgment, clear boundaries, direct', zh: '獨立，公正判斷，明確界限，直接' },
      reversed: { en: 'Overly critical, cold, harsh, bitter', zh: '過於批判，冷漠，嚴厲，苦澀' }
    },
    isReversed: false
  },
  {
    id: 'swords_14',
    name: { en: 'King of Swords', zh: '寶劍國王' },
    arcana: 'minor',
    suit: 'swords',
    image: '/assets/tarot/minor/swords/swords_14.jpg',
    meanings: {
      upright: { en: 'Clear thinking, intellectual power, authority, truth', zh: '清晰思考，智力，權威，真相' },
      reversed: { en: 'Manipulative, tyrannical, abusive of power', zh: '操縱，專制，濫用權力' }
    },
    isReversed: false
  },

  // 小阿爾克納牌 - 錢幣 (Pentacles)
  {
    id: 'pentacles_01',
    name: { en: 'Ace of Pentacles', zh: '錢幣一' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_01.jpg',
    meanings: {
      upright: { en: 'New financial opportunity, manifestation, abundance', zh: '新的財務機會，顯現，豐盛' },
      reversed: { en: 'Lost opportunity, lack of planning, scarcity mindset', zh: '失去機會，缺乏計劃，稀缺思維' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_02',
    name: { en: 'Two of Pentacles', zh: '錢幣二' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_02.jpg',
    meanings: {
      upright: { en: 'Balance, adaptability, juggling priorities, time management', zh: '平衡，適應性，處理優先事項，時間管理' },
      reversed: { en: 'Imbalance, disorganization, overwhelm', zh: '不平衡，混亂，壓力過大' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_03',
    name: { en: 'Three of Pentacles', zh: '錢幣三' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_03.jpg',
    meanings: {
      upright: { en: 'Teamwork, collaboration, learning, mastery', zh: '團隊合作，協作，學習，精通' },
      reversed: { en: 'Lack of cohesion, substandard work, no recognition', zh: '缺乏凝聚力，低標準工作，沒有認可' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_04',
    name: { en: 'Four of Pentacles', zh: '錢幣四' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_04.jpg',
    meanings: {
      upright: { en: 'Security, control, conservation, scarcity mindset', zh: '安全，控制，保守，稀缺思維' },
      reversed: { en: 'Generosity, relaxation, new approach to money', zh: '慷慨，放鬆，新的金錢態度' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_05',
    name: { en: 'Five of Pentacles', zh: '錢幣五' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_05.jpg',
    meanings: {
      upright: { en: 'Financial loss, poverty, lack mindset, isolation', zh: '財務損失，貧困，匱乏思維，孤立' },
      reversed: { en: 'Recovery, spiritual growth, asking for help', zh: '恢復，靈性成長，尋求幫助' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_06',
    name: { en: 'Six of Pentacles', zh: '錢幣六' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_06.jpg',
    meanings: {
      upright: { en: 'Giving, receiving, sharing wealth, generosity', zh: '給予，接收，分享財富，慷慨' },
      reversed: { en: 'Power dynamics, strings attached, one-sided giving', zh: '權力動態，附加條件，單方面給予' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_07',
    name: { en: 'Seven of Pentacles', zh: '錢幣七' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_07.jpg',
    meanings: {
      upright: { en: 'Long-term view, perseverance, sustainable result', zh: '長遠視野，堅持不懈，可持續結果' },
      reversed: { en: 'Lack of reward, work without results, impatience', zh: '缺乏回報，毫無成果的工作，不耐煩' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_08',
    name: { en: 'Eight of Pentacles', zh: '錢幣八' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_08.jpg',
    meanings: {
      upright: { en: 'Apprenticeship, skill development, mastery, dedication', zh: '學徒期，技能發展，精通，奉獻' },
      reversed: { en: 'Perfectionism, lack of ambition, uninspired work', zh: '完美主義，缺乏野心，無靈感的工作' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_09',
    name: { en: 'Nine of Pentacles', zh: '錢幣九' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_09.jpg',
    meanings: {
      upright: { en: 'Abundance, financial independence, self-sufficiency', zh: '豐盛，財務獨立，自給自足' },
      reversed: { en: 'Over-dependence, financial setbacks, lack of discipline', zh: '過度依賴，財務挫折，缺乏紀律' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_10',
    name: { en: 'Ten of Pentacles', zh: '錢幣十' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_10.jpg',
    meanings: {
      upright: { en: 'Legacy, inheritance, family wealth, long-term success', zh: '遺產，繼承，家族財富，長期成功' },
      reversed: { en: 'Family disputes, bankruptcy, loss of legacy', zh: '家庭糾紛，破產，失去遺產' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_11',
    name: { en: 'Page of Pentacles', zh: '錢幣侍者' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_11.jpg',
    meanings: {
      upright: { en: 'New opportunities, manifestation, skill development', zh: '新機會，顯現，技能發展' },
      reversed: { en: 'Lack of progress, missed opportunity, immaturity', zh: '缺乏進展，錯失機會，不成熟' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_12',
    name: { en: 'Knight of Pentacles', zh: '錢幣騎士' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_12.jpg',
    meanings: {
      upright: { en: 'Hard work, productivity, routine, conservatism', zh: '努力工作，生產力，常規，保守主義' },
      reversed: { en: 'Boredom, stagnation, laziness, feeling stuck', zh: '無聊，停滯，懶惰，感到卡住' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_13',
    name: { en: 'Queen of Pentacles', zh: '錢幣皇后' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_13.jpg',
    meanings: {
      upright: { en: 'Nurturing, practical, financial security, motherly', zh: '培育，實際，財務安全，母性的' },
      reversed: { en: 'Selfish, smothering, neglecting self-care, materialism', zh: '自私，窒息，忽視自我照顧，物質主義' }
    },
    isReversed: false
  },
  {
    id: 'pentacles_14',
    name: { en: 'King of Pentacles', zh: '錢幣國王' },
    arcana: 'minor',
    suit: 'pentacles',
    image: '/assets/tarot/minor/pentacles/pentacles_14.jpg',
    meanings: {
      upright: { en: 'Wealth, leadership, security, abundance mindset', zh: '財富，領導力，安全感，豐盛心態' },
      reversed: { en: 'Exploitation, obsessed with wealth, stubborn', zh: '剝削，執著於財富，固執' }
    },
    isReversed: false
  },

  // 小阿爾克納牌 - 權杖 (Wands)
  {
    id: 'wands_01',
    name: { en: 'Ace of Wands', zh: '權杖一' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_01.jpg',
    meanings: {
      upright: { en: 'Inspiration, creative spark, new opportunity, potential', zh: '靈感，創意火花，新機會，潛力' },
      reversed: { en: 'Delays, blocks to creativity, lack of motivation', zh: '延遲，創造力阻礙，缺乏動力' }
    },
    isReversed: false
  },
  {
    id: 'wands_02',
    name: { en: 'Two of Wands', zh: '權杖二' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_02.jpg',
    meanings: {
      upright: { en: 'Future planning, progress, decisions, discovery', zh: '未來規劃，進展，決策，發現' },
      reversed: { en: 'Fear of change, playing it safe, bad planning', zh: '害怕改變，保守行事，糟糕的規劃' }
    },
    isReversed: false
  },
  {
    id: 'wands_03',
    name: { en: 'Three of Wands', zh: '權杖三' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_03.jpg',
    meanings: {
      upright: { en: 'Looking ahead, expansion, foresight, opportunities', zh: '展望未來，擴張，遠見，機會' },
      reversed: { en: 'Obstacles, delays, frustration, lack of foresight', zh: '障礙，延遲，挫折，缺乏遠見' }
    },
    isReversed: false
  },
  {
    id: 'wands_04',
    name: { en: 'Four of Wands', zh: '權杖四' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_04.jpg',
    meanings: {
      upright: { en: 'Celebration, joy, harmony, home, community', zh: '慶祝，喜悅，和諧，家，社區' },
      reversed: { en: 'Lack of support, transience, home conflicts', zh: '缺乏支持，短暫，家庭衝突' }
    },
    isReversed: false
  },
  {
    id: 'wands_05',
    name: { en: 'Five of Wands', zh: '權杖五' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_05.jpg',
    meanings: {
      upright: { en: 'Conflict, competition, tension, disagreements', zh: '衝突，競爭，緊張，意見不合' },
      reversed: { en: 'End to conflict, cooperation, harmony after strife', zh: '衝突結束，合作，衝突後的和諧' }
    },
    isReversed: false
  },
  {
    id: 'wands_06',
    name: { en: 'Six of Wands', zh: '權杖六' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_06.jpg',
    meanings: {
      upright: { en: 'Victory, success, public recognition, progress', zh: '勝利，成功，公眾認可，進步' },
      reversed: { en: 'Private victory, insecurity, self-doubt', zh: '私人勝利，不安全感，自我懷疑' }
    },
    isReversed: false
  },
  {
    id: 'wands_07',
    name: { en: 'Seven of Wands', zh: '權杖七' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_07.jpg',
    meanings: {
      upright: { en: 'Challenge, competition, protection, perseverance', zh: '挑戰，競爭，保護，堅持' },
      reversed: { en: 'Giving up, overwhelmed, exhausted, defeated', zh: '放棄，不堪重負，精疲力竭，失敗' }
    },
    isReversed: false
  },
  {
    id: 'wands_08',
    name: { en: 'Eight of Wands', zh: '權杖八' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_08.jpg',
    meanings: {
      upright: { en: 'Speed, action, quick decisions, momentum', zh: '速度，行動，快速決策，動力' },
      reversed: { en: 'Delays, frustration, lost momentum, internal conflict', zh: '延遲，挫折，失去動力，內部衝突' }
    },
    isReversed: false
  },
  {
    id: 'wands_09',
    name: { en: 'Nine of Wands', zh: '權杖九' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_09.jpg',
    meanings: {
      upright: { en: 'Resilience, courage, persistence, test of faith', zh: '堅韌，勇氣，堅持，信念的考驗' },
      reversed: { en: 'Exhaustion, burnout, giving up, too proud to accept help', zh: '疲憊，精疲力竭，放棄，太驕傲而不接受幫助' }
    },
    isReversed: false
  },
  {
    id: 'wands_10',
    name: { en: 'Ten of Wands', zh: '權杖十' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_10.jpg',
    meanings: {
      upright: { en: 'Burdens, responsibilities, hard work, completion', zh: '負擔，責任，艱苦工作，完成' },
      reversed: { en: 'Failure to delegate, shouldering too much, burnout', zh: '未能委派，承擔過多，精疲力竭' }
    },
    isReversed: false
  },
  {
    id: 'wands_11',
    name: { en: 'Page of Wands', zh: '權杖侍者' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_11.jpg',
    meanings: {
      upright: { en: 'Exploration, enthusiasm, discovery, free spirit', zh: '探索，熱情，發現，自由精神' },
      reversed: { en: 'Lack of direction, procrastination, hyperactive', zh: '缺乏方向，拖延，過度活躍' }
    },
    isReversed: false
  },
  {
    id: 'wands_12',
    name: { en: 'Knight of Wands', zh: '權杖騎士' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_12.jpg',
    meanings: {
      upright: { en: 'Action, adventure, fearlessness, restless', zh: '行動，冒險，無畏，不安分' },
      reversed: { en: 'Impulsiveness, recklessness, frustration, unpredictable', zh: '衝動，魯莽，挫折，不可預測' }
    },
    isReversed: false
  },
  {
    id: 'wands_13',
    name: { en: 'Queen of Wands', zh: '權杖皇后' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_13.jpg',
    meanings: {
      upright: { en: 'Courageous, confident, determined, self-assured', zh: '勇敢，自信，堅決，篤定' },
      reversed: { en: 'Demanding, vengeful, low confidence, jealous', zh: '苛求，報復心強，自信心低，嫉妒' }
    },
    isReversed: false
  },
  {
    id: 'wands_14',
    name: { en: 'King of Wands', zh: '權杖國王' },
    arcana: 'minor',
    suit: 'wands',
    image: '/assets/tarot/minor/wands/wands_14.jpg',
    meanings: {
      upright: { en: 'Natural leader, vision, honor, entrepreneur', zh: '天生的領導者，遠見，榮譽，企業家' },
      reversed: { en: 'Forceful, domineering, ineffective, poor leadership', zh: '強勢，專橫，無效，糟糕的領導' }
    },
    isReversed: false
  }
];

/**
 * 從塔羅牌陣列中隨機抽取指定數量的牌
 * @param {number} n - 要抽取的卡牌數量
 * @returns {Array} - 抽取的卡牌陣列，每張牌都有隨機的正逆位
 */
export const drawCards = (n) => {
  const cards = [...tarotCards];
  
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  
  return cards.slice(0, n).map(card => {
    const drawnCard = {...card};
    drawnCard.isReversed = Math.random() < 0.5;
    return drawnCard;
  });
};

/**
 * 獲取卡牌的牌義文本
 * @param {Object} card - 卡牌對象
 * @param {Function} t - i18n 翻譯函數
 * @returns {string} - 翻譯後的牌義文本
 */
export const getCardMeaning = (card, t) => {
  const position = card.isReversed ? 'reversed' : 'upright';
  const cardKey = card.arcana === 'major' 
    ? `major_${card.id.split('_')[1]}` 
    : `${card.suit}_${card.id.split('_')[1]}`;
    
  return t(`cards.${cardKey}.${position}`);
};