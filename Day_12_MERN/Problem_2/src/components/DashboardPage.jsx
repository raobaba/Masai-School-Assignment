// components/DashboardPage.js

import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const DashboardPage = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to={`${url}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Settings</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/profile`} component={Profile} />
        <Route path={`${path}/settings`} component={Settings} />
      </Switch>
    </div>
  );
};

export default DashboardPage;
