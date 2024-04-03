import React, { useState } from 'react';
import './profile.css';
import CustomAppBar from "../components/CustomAppBar";
import ProfileSearchSubscriptions from '../components/ProfileSearchSubcriptions';
import subscribedForums from '../Data/SubscribedForums';

function Profile({ setPage }) {
  const [description, setDescription] = useState('This is a default description.');
  const [name, setName] = useState('Aryan');
  const [searchedForum, setSearchedForum] = useState('');
  const [allsubscribedForums, setAllSubscribedForums] = useState(subscribedForums);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleForumChange = (newForum) => {
    setSearchedForum(newForum);
  };

  const filteredForums = allsubscribedForums.filter(forum => forum.name.toLowerCase().includes(searchedForum.toLowerCase()));

  const removeSelectedForum = (id) => {

    const updatedForums = allsubscribedForums.filter(forum => forum.id !== id);
    setAllSubscribedForums(updatedForums);
    const updatedForumsFileContent = `const allsubscribedForums = ${JSON.stringify(updatedForums, null, 4)};\nexport default subscribedForums;`;
    console.log(updatedForumsFileContent);
  }

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
      <div className="profile-name"> {/* Add this div for the name */}
        <h2 style={{ color: "white" }}>{name}</h2> {/* Display the name */}
      </div>
      <div className="description-section" >
        <textarea
          className="description-edit"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button className="save-description-button">Save Description</button>
      </div>
      <div className='joined-forum'>
        <h2>Joined Forums</h2>
        {/* <input type="text" placeholder='Search..' className='forum-search'/> */}
        <ProfileSearchSubscriptions barWidth="40rem" onForumChange={handleForumChange} />
      </div>
      <div className="forums-item">
        {filteredForums.map(forum => (
          <div key={forum.id} className="forum-item">
            <img src={forum.imageUrl} alt="Forum" className="forum-image" />
            <div className="forum-info">
              <h4 style={{ textDecoration: 'underline' }}>{forum.name}</h4>
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
