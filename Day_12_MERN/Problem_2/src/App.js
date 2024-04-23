// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DashboardPage from './components/DashboardPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
