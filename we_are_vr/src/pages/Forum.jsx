import React, { useState } from 'react';
import "./Forum.css"
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import ButtonAppBar from '../components/CustomAppBar';
import { color } from '@mui/system';
import allForums from '../Data/allForums';
import subscribedForums from "../Data/SubscribedForums"
const ForumPage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [forums, setForums] = useState(JSON.parse(localStorage.getItem('SubscribedForums')) || subscribedForums);
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

              <div className="message">
                <img src="../../images/gorilla2.jpeg" alt="" />
                <div>
                  <div>
                    <div className="message-user">GorillaBoy</div>
                    <div className="date">Mar 6 3:02am</div>
                  </div>
                  <div className="message-text">Hey do you wanna see some awesome clips I recorded yesterday?</div>
                </div>
              </div>

              <div className="message">
                <img src="../../images/gorilla3.webp" alt="" />
                <div>
                  <div>
                    <div className="message-user">Monkey3</div>
                    <div className="date">Mar 6 3:02am</div>
                  </div>
                  <div className="message-text">Sure lets see them.</div>
                </div>
              </div>


              <div className="message">
                <img src="../../images/gorilla2.jpeg" alt="" />
                <div>
                  <div>
                    <div className="message-user">GorillaBoy</div>
                    <div className="date">Mar 6 3:02am</div>
                  </div>
                  <div className="message-text">Aight here it is! Enjoy</div>
                </div>
              </div>

              <div className="message">
                <img src="../../images/gorilla2.jpeg" alt="" />
                <div>
                  <div>
                    <div className="message-user">GorillaBoy</div>
                    <div className="date">Mar 6 3:02am</div>
                  </div>
                  <div className='video-post'>
                    <iframe src="https://www.youtube.com/embed/4aLNmN1DVts" frameborder="0"></iframe>
                    <div>
                      <button>Like (3)</button>
                      <button>Reply (0)</button>
                      <button>Share</button>

                    </div>
                  </div>

                </div>
              </div>



              {/* Repeat for each message */}
            </div>
            <div className="message-input-container">
              <button className="send-message-button" style={{ marginRight: "1rem" }}>Upload media</button>
              <input type="text" className="message-input" placeholder="Type a message..." />
              <button className="send-message-button">Send</button>
            </div>
          </main>

        </div>
      </Box>
    </div>
  );
};

export default ForumPage;
