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
  const [profilePic, setProfilePic] = useState('../../images/profile.png'); // Default profile picture
  const [coverPhoto, setCoverPhoto] = useState('../../images/cover-default.jpg'); // Default cover photo
  const fileInputRef = React.createRef(); // Ref for profile picture file input
  const coverPhotoInputRef = React.createRef(); // Ref for cover photo file input

  // Handlers for profile picture remain unchanged
  
  const handleCoverPhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setCoverPhoto(URL.createObjectURL(file)); // Update cover photo with the selected file
    }
  };

  const triggerCoverPhotoInput = () => {
    coverPhotoInputRef.current.click(); // Programmatically click the hidden file input for cover photo
  };
  const handleEditDescription = () => {
    setTempDescription(description);
    setShowEditPopup(true);
  };

  const handleSaveDescription = (newDescription) => {
    setDescription(newDescription);
    setShowEditPopup(false);
  };

  const handleCancelEdit = () => {
    setShowEditPopup(false);
  };

  const handleProfilePicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfilePic(URL.createObjectURL(file)); // Create a URL for the selected file and update the state
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };
  return (
    <>
    <CustomAppBar />
     <div className="cover-photo">
       
        <button className="edit-button" onClick={triggerCoverPhotoInput}>Edit Cover Photo</button>
      </div>
      <input
        type="file"
        ref={coverPhotoInputRef}
        style={{ display: 'none' }} // Hide the file input
        onChange={handleCoverPhotoChange}
        accept="image/*" // Accept images only
      />
      <div className="profile-section">
              <div className="profile-picture">
        <img src={profilePic} alt="Profile" />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }} // Hide the file input
          onChange={handleProfilePicChange}
          accept="image/*" // Accept images only
        />
        <button className="edit-profile-button" onClick={triggerFileInput}>Edit Profile Picture</button>
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
