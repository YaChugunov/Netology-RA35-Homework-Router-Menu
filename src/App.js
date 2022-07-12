import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/style.css';

import Menu from './Menu';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import TimeAttackPage from './pages/TimeAttackPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
