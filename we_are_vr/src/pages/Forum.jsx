import React from 'react';
import "./Forum.css"
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";

import ButtonAppBar from '../components/CustomAppBar';
import { color } from '@mui/system';


import CustomAppBar from "../components/CustomAppBar";


const ForumPage = () => {

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
          <p style={{color:"black"}}>.</p>

          <div>
            <img src="../../images/gorilla.jpeg" alt="" />
            <h2>Gorilla Tag</h2>
          </div>

          <div className="header-icons">
            <button className="about-button">About</button>
            <button className="join-button">Join Forum</button>

          </div>
        </header>


        <main className="forum-main">
        <div className="messages-container">
          {/* Sample messages */}


          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">GorillaBoy</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Hey do you wanna see some awesome clips I recorded yesterday?</div>
            </div>
          </div>

          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">Monkey3</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Sure lets see them.</div>
            </div>
          </div>


          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">GorillaBoy</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Aight here it is! Enjoy</div>
            </div>
          </div>

          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
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
          <button className="send-message-button" style={{marginRight:"1rem"}}>Upload media</button>
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
