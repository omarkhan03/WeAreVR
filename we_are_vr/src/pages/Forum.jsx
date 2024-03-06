import React from 'react';
import "./Forum.css"
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";



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
        <SideBar showSearch={1}/>
        <div className="forum-page">

        <header className="forum-header">
          <button className="back-button">{'<'}</button>
          <div>
            <img src="../../images/gorilla.jpeg" alt="" />
            <h2>Gorilla Tag</h2>
          </div>


          {/* <input type="search" placeholder="Search" /> */}
          <div className="header-icons">
            <button className="about-button">About</button>
            <button className="join-button">Join Forum</button>
            <button className="settings-button">Settings</button>

          </div>
        </header>


        <main className="forum-main">
        <div className="messages-container">
          {/* Sample messages */}


          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">Monkey3</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima neque, quidem explicabo laborum tenetur, molestiae repellendus voluptatum eius inventore provident illo, ad debitis quis mollitia commodi deleniti adipisci excepturi!</div>
            </div>
          </div>


          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">GorillaBoy</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima neque, quidem explicabo laborum tenetur, molestiae repellendus voluptatum eius inventore provident illo, ad debitis quis mollitia commodi deleniti adipisci excepturi!</div>
            </div>
          </div>

          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">Monkey3</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima neque, quidem explicabo laborum tenetur, molestiae repellendus voluptatum eius inventore provident illo, ad debitis quis mollitia commodi deleniti adipisci excepturi!</div>
            </div>
          </div>


          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">GorillaBoy</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima neque, quidem explicabo laborum tenetur, molestiae repellendus voluptatum eius inventore provident illo, ad debitis quis mollitia commodi deleniti adipisci excepturi!</div>
            </div>
          </div>

          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">Monkey3</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima neque, quidem explicabo laborum tenetur, molestiae repellendus voluptatum eius inventore provident illo, ad debitis quis mollitia commodi deleniti adipisci excepturi!</div>
            </div>
          </div>


          <div className="message">
            <img src="../../images/gorilla.jpeg" alt="" />
            <div>
              <div>
                <div className="message-user">GorillaBoy</div>
                <div className="date">Mar 6 3:02am</div>
              </div>
              <div className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima neque, quidem explicabo laborum tenetur, molestiae repellendus voluptatum eius inventore provident illo, ad debitis quis mollitia commodi deleniti adipisci excepturi!</div>
            </div>
          </div>


          {/* Repeat for each message */}
        </div>
        <div className="message-input-container">
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
