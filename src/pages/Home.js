import React from 'react';
import TarotForm from '../components/TarotForm';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/banners/bg_starry_wood.png';
import logo from '../assets/icons/logo_mystic_tarot.png'; // 使用原始/垂直版本的 logo
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="home-container" style={containerStyle}>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Mystic Tarot" className="home-logo" />
        </div>
        <h1>{t('home.title')}</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
      </header>
      
      <div className="home-content">
        <div className="intro-text">
          <p>{t('home.intro')}</p>
        </div>
        
        <TarotForm />
      </div>
      
      <footer>
        <p>{t('home.footer')}</p>
      </footer>
    </div>
  );
};

export default Home;