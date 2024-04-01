import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Login from './pages/Login';
import VisitProfile from './pages/VisitProfile';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/Home" render={() => <Home />} />
        <Route exact path="/Forum" render={() => <Forum />} />
        <Route exact path="/Profile" render={() => <Profile />} />
        <Route exact path="/Login" render={() => <Login />} />
        <Route exact path="/VisitProfile" render={() => <VisitProfile />} />
      
    </Router>
  );
}

export default App;
