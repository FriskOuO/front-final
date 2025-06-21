import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Draw from './pages/Draw';
import Reading from './pages/Reading';
import TarotGuide from './pages/TarotGuide';
import IntroPage from './pages/IntroPage';
import Navbar from './components/Navbar';
import './App.css';
import './i18n/i18n'; // 確保 i18n 配置在應用程式啟動時就被導入

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/tarot-guide" element={<TarotGuide />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
