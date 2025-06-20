import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/icons/logo_mystic_tarot_horizontal.png';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // 檢查當前路徑以添加活動頁面標記
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Mystic Tarot" className="nav-logo" />
        </Link>
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/" className={`navbar-button ${isActive('/')}`}>
              {t('navbar.home')}
            </Link>
            <Link to="/tarot-guide" className={`navbar-button ${isActive('/tarot-guide')}`}>
              {t('navbar.tarotGuide')}
            </Link>
          </div>
          <div className="navbar-language">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;