import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './style.css';

import Menu from './Menu';
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './ForzaPage';
import TimeAttackPage from './TimeAttackPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/">{HomePage}</Route>
            <Route path="/drift">{DriftPage}</Route>
            <Route path="/timeattack">{TimeAttackPage}</Route>
            <Route path="/forza">{ForzaPage}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
