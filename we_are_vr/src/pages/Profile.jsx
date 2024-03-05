import React from 'react';
import './profile.css';
function Profile({ setPage }) {
  return (
    <>
<nav className="navbar">
      <div className="nav-item" id="home"> <button onClick={() => setPage('home')}>Home</button></div>
      <div className="nav-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-item" id="login">Login</div>
    </nav>
     <div className="cover-photo">
     <button className="edit-button">Edit Cover Photo</button>
   </div>
   <div className="profile-section">
        <div className="profile-picture">
          <img src="../../images/profile.png" alt="Profile" />
          <button className="edit-profile-button">Edit Profile Picture</button>
        </div>
      </div>
   </>
  );
}

export default Profile;
