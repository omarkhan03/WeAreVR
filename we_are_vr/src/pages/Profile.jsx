import React from 'react';
import './profile.css';
function Profile({ setPage }) {
  return (
   
<nav className="navbar">
      <div className="nav-item" id="home">Home</div>
      <div className="nav-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-item" id="login">Login</div>
    </nav>
    
   
  );
}

export default Profile;
