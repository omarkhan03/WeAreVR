import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Profile from './pages/Profile';

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
