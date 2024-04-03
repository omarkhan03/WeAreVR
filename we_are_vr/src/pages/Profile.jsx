import React, { useState } from 'react';
import './profile.css';
import SearchFunction from "../components/SearchFunction";
import CustomAppBar from "../components/CustomAppBar";

const forums = [
  {
    id: 1,
    title: "v/Gorilla Tag",
    description: "This is a short description of Gorilla Tag. Here's another line for it.",
    imageUrl: "../../images/profile.png", // Replace with actual image paths
  },
  {
    id: 2,
    title: "v/Quest 3",
    description: "This is a short description of Quest 3. Here's another line for it.",
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
        <p style={{ color: "white" }}>{description}</p>
      </div>
      <button style={{ backgroundColor: "#007bff", color: "white" }} className="leave-button">Leave</button>
    </div>
  );
}

function EditDescriptionPopup({ onSave, onCancel, description, setDescription }) {
  return (
    <div className="popup-background">
      <div className="popup-container">
        <textarea
          className="description-edit-popup"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="popup-actions">
          <button style={{ backgroundColor: "#0056b3", color: "white" }} onClick={() => onSave(description)}>Save</button>
          <button style={{ backgroundColor: "#0056b3", color: "white" }}onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function Profile({ setPage }) {
  const [description, setDescription] = useState('This is a default description.');
  const [name, setName] = useState('Aryan');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [tempDescription, setTempDescription] = useState(description);

  const handleEditDescription = () => {
    setTempDescription(description); // Initialize temporary description
    setShowEditPopup(true); // Show the popup
  };

  const handleSaveDescription = (newDescription) => {
    setDescription(newDescription); // Save the new description
    setShowEditPopup(false); // Close the popup
  };

  const handleCancelEdit = () => {
    setShowEditPopup(false); // Just close the popup without saving
  };

  return (
    <>
    <CustomAppBar />
      <div className="cover-photo">
        <button className="edit-button">Edit Cover Photo</button>
      </div>
      <div className="profile-section">
        <div className="profile-picture">
          <img src="../../images/profile.png" alt="Profile" />
          <button className="edit-profile-button">Edit Profile Picture</button>
        </div>
      </div>
      <div className="profile-name">
        <h2 style={{ color: "white" }}>{name}</h2>
      </div>
      
      <div className="description-section">
      <textarea
          className="description-edit"
          value={description}
          
        />
        <button onClick={handleEditDescription} className="edit-description-button">Edit Description</button>
      </div>
      {showEditPopup && (
        <EditDescriptionPopup
          onSave={handleSaveDescription}
          onCancel={handleCancelEdit}
          description={tempDescription}
          setDescription={setTempDescription}
        />
      )}
      <div className='joined-forum'>
        <h2>Joined Forums</h2>
        <SearchFunction barWidth="20rem;" />
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
