import React, { useState } from 'react';
import "./Forum.css"
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import ButtonAppBar from '../components/CustomAppBar';
import { color } from '@mui/system';
import allForums from '../Data/allForums';

const ForumPage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [forums, setForums] = useState(JSON.parse(localStorage.getItem('SubscribedForums')));
  const [forumId, setForumId] = useState(1);
  
  // Function to check if the forum is joined by the user
  const isForumJoined = () => {
    if (isLoggedIn) {
      // Check if the forum with the given forumId is in the subscribed forums list
      return forums.some(forum => forum.id === forumId);
    }
    return false;
  };
  const toggleJoined = () => {
    if (isLoggedIn) {
      // If the forum is already joined, remove it from the subscribed forums list
      if (isForumJoined()) {
        const newForums = forums.filter(forum => forum.id !== forumId);
        setForums(newForums);
        localStorage.setItem('SubscribedForums', JSON.stringify(newForums));
      } else {
        // If the forum is not joined, go to the allForum list, grab the forum and add it to the subscribed forums list 
        const forum = allForums.find(forum => forum.id === forumId);
        const newForums = [...forums, forum];
        setForums(newForums);
        localStorage.setItem('SubscribedForums', JSON.stringify(newForums));
      }
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "GorillaBoy",
      date: "Mar 6 3:02am",
      text: "Hey do you wanna see some awesome clips I recorded yesterday?",
      imgSrc: "../../images/gorilla2.jpeg",
    },
    {
      id: 2,
      user: "Monkey3",
      date: "Mar 6 3:02am",
      text: "Sure lets see them.",
      imgSrc: "../../images/gorilla3.webp",
    },
    {
      id: 3,
      user: "GorillaBoy",
      date: "Mar 6 3:02am",
      text: "Aight here it is! Enjoy",
      imgSrc: "../../images/gorilla2.jpeg",
    },
    {
      id: 4,
      user: "GorillaBoy",
      date: "Mar 6 3:15am",
      text: `<iframe src="https://www.youtube.com/embed/4aLNmN1DVts" frameborder="0" allowfullscreen></iframe>`,
      imgSrc: "../../images/gorilla2.jpeg",
      likes: 3, // like count state for video post
    },
  ]);

  const handleLike = (id) => {
    setMessages(messages.map(message => {
      if (message.id === id) {
        return { ...message, likes: message.likes + 1 };
      }
      return message;
    }));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      user: "Aryan",
      date: new Date().toLocaleString(),
      text: inputValue,
      imgSrc: "../../images/profile.png",
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          background: "inherit",
        }}
      >

        <SideBar />
        <div className="forum-page">

          <ButtonAppBar></ButtonAppBar>

          <header className="forum-header">
            <p style={{ color: "black" }}>.</p>

            <div>
              <img src="../../images/gorilla.jpeg" alt="" />
              <h2>Gorilla Tag</h2>
            </div>

            <div className="header-icons">
              <button className="about-button">About</button>
              {isLoggedIn && isForumJoined() ? (
                <button className="green-button" onClick={toggleJoined}>Joined</button>
              ) : (
                <button className="join-button" onClick={toggleJoined} >Join</button>
              )}
            </div>
          </header>


          <main className="forum-main">
            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className="message">
                  <img src={message.imgSrc} alt="" />
                  <div>
                    <div>
                      <div className="message-user">{message.user}</div>
                      <div className="date">{message.date}</div>
                    </div>
                    <div className="message-text" dangerouslySetInnerHTML={{ __html: message.text }}></div>
                    {message.likes !== undefined && (
                      <div className="video-post-actions">
                        <button style={{ backgroundColor: "#0056b3", color: "white" }} onClick={() => handleLike(message.id)}>
                          Like ({message.likes})
                        </button>
                        <button style={{ backgroundColor: "#0056b3", color: "white" }}>Reply (0)</button>
                        <button style={{ backgroundColor: "#0056b3", color: "white" }}>Share</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="message-input-container">
              <button className="send-message-button" style={{marginRight:"1rem"}}>Upload media</button>
              <input
                type="text"
                className="message-input"
                placeholder="Type a message..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button className="send-message-button" onClick={handleSubmit}>Send</button>
            </div>
          </main>

        </div>
      </Box>
    </div>
  );
};

export default ForumPage;
