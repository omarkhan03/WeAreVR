import React,{ useState } from 'react';
import './profile.css';
const forums = [
  {
    id: 1,
    title: "Forum 1",
    description: "This is a short description of Forum 1. Here's another line for it.",
    imageUrl: "../../images/profile.png", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Forum 2",
    description: "This is a short description of Forum 2. Here's another line for it.",
    imageUrl: "../../images/profile.png",
  },
  // Add more forums as needed
];

function ForumItem({ title, description, imageUrl }) {
  return (
    <div className="forum-item">
      <img src={imageUrl} alt={title} className="forum-image" />
      <div className="forum-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button className="leave-button">Leave</button>
    </div>
  );
}
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
      <div className="forums-list">
        {forums.map(forum => (
          <ForumItem key={forum.id} {...forum} />
        ))}
      </div>
   </>
  );
}

export default Profile;
