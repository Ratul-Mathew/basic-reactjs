import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import CreateNew from '../CreateNew/CreateNew';
import DashBoard from '../Dashboard/Dashboard';
import HomeNavBar from '../HomeNavBar/HomeNavBar';
import Report from '../Reports/Report';

function App() {
  return (
      <Router>
          <Switch>
              <div>
                  <HomeNavBar />
                  <Route exact path="/" component={Home} />
                  <Route path="/createnew" component={CreateNew} />
                  <Route path="/dashboard" component={DashBoard} />
                  <Route path="/report" component={Report} />
              </div>
          </Switch>
      </Router>
  );
}

export default App;
