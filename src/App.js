import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Draw from './pages/Draw';
import Result from './pages/Result';
import TarotGuide from './pages/TarotGuide'; // 新增塔羅牌解釋頁面
import Navbar from './components/Navbar'; // 引入導覽列
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar /> {/* 新增導覽列 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/result" element={<Result />} />
          <Route path="/tarot-guide" element={<TarotGuide />} /> {/* 新增塔羅牌解釋頁面路由 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
