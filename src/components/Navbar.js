import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/icons/logo_mystic_tarot_horizontal.png';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Mystic Tarot" />
        </Link>
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/tarot-guide" className="navbar-button">
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