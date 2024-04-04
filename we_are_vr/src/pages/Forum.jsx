import React, { useState } from 'react';
import "./Forum.css";
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import CustomAppBar from "../components/CustomAppBar";

const ForumPage = () => {
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
      <Box sx={{ display: "grid", gridTemplateColumns: "250px 1fr", background: "inherit" }}>
        <SideBar />
        <div className="forum-page">
          <CustomAppBar />
          <header className="forum-header">
            {/* Header content as before */}
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
