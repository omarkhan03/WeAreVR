import React,{ useState } from 'react';
import './profile.css';
function Profile({ setPage }) {
  const [description, setDescription] = useState('This is a default description.');
  const [name, setName] = useState('Aryan Taneja');
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <>
<nav className="navbar">
      <div className="nav-item" id="home"> <button onClick={() => setPage('home')}>Home</button></div>
      <div className="nav-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-item" id="login">Welcome Back, {name}</div>
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
      <div className="profile-name"> {/* Add this div for the name */}
          <h2>{name}</h2> {/* Display the name */}
        </div>
      <div className="description-section">
        <textarea
          className="description-edit"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button className="save-description-button">Save Description</button>
      </div>
      <div className='joined-forum'>
        <h2>Joined Forums</h2>
        <input type="text" placeholder='Search..' className='forum-search'/>
      </div>
   </>
  );
}

export default Profile;
