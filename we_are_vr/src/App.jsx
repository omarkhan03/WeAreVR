import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Login from './pages/Login';
import VisitProfile from './pages/VisitProfile';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'forum':
        return <Forum setPage={setPage} />;
      case 'profile':
        return <Profile setPage={setPage} />;
      case 'login':
        return <Login setPage={setPage} />;
      case 'VisitProfile':
        return <VisitProfile setPage={setPage} />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
