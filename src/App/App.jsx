import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import CreateNew from '../CreateNew/CreateNew';
import DashBoard from '../Dashboard/Dashboard';
import HomeNavBar from '../HomeNavBar/HomeNavBar';
import Report from '../Reports/Report';

function App() {
  return (
      <Router>
      <HomeNavBar />
        <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/createnew" element={<CreateNew/>} />
              <Route path="/dashboard" element={<DashBoard/>} />
              <Route path="/report" element={<Report/>} />
        </Routes>
      </Router>
  );
}

export default App;
