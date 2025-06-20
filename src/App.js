import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Draw from './pages/Draw';
import Result from './pages/Result';
import TarotGuide from './pages/TarotGuide';
import IntroPage from './pages/IntroPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/result" element={<Result />} />
          <Route path="/tarot-guide" element={<TarotGuide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
