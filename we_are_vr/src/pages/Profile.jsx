import React, { useState } from 'react';
import './profile.css';
import CustomAppBar from "../components/CustomAppBar";
import ProfileSearchSubscriptions from '../components/searchFunctions/ProfileSearchSubcriptions';
import handleForumClick from '../utils/ForumNavigation';
import { useHistory } from 'react-router-dom';

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

function Profile() {
  const [description, setDescription] = useState('Hi Im Aryan, Welcome to my profile! I am interested in VR and AR technologies. I love playing VR games and I staying updated with the latest VR news. Feel free to follow me on youtube! www.youtube.com');
  const [name, setName] = useState('Aryan');
  const [searchedForum, setSearchedForum] = useState('');
  const [allsubscribedForums, setAllSubscribedForums] = useState(JSON.parse(localStorage.getItem('SubscribedForums')));
  const history = useHistory();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [tempDescription, setTempDescription] = useState(description);
  const [profilePic, setProfilePic] = useState('../../public/profile.png'); // Default profile picture
  const [coverPhoto, setCoverPhoto] = useState('../../public/cover-default.jpg'); // Default cover photo
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

  const handleForumChange = (newForum) => {
    setSearchedForum(newForum);
  };

  const filteredForums = allsubscribedForums.filter(forum => forum.name.toLowerCase().includes(searchedForum.toLowerCase()));

  const removeSelectedForum = (id) => {
    const newSubscribedForums = allsubscribedForums.filter(forum => forum.id !== id);
    setAllSubscribedForums(newSubscribedForums);
    localStorage.setItem('SubscribedForums', JSON.stringify(newSubscribedForums));
  }
  

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
        {!showEditPopup && <ProfileSearchSubscriptions barWidth="40rem" onForumChange={handleForumChange} />}
      </div>
      <div className="forums-item">
        {filteredForums.map(forum => (
          <div key={forum.id} className="forum-item">
            <img src={forum.imageUrl} alt="Forum" className="forum-image" />
            <div className="forum-info">
              <h4 style={{ textDecoration: 'underline'}} ><span onClick={() => handleForumClick("v/Gorilla Tag",history)} style={{cursor: 'pointer'}}>{forum.name}</span></h4>
              <p style={{ color: "white" }}>{forum.description}</p>
            </div>
            <button onClick={() => removeSelectedForum(forum.id)} className="leave-button" style={{ backgroundColor: "#007bff", color: "white" }}>Leave</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Profile;
