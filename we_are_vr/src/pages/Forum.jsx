import React from 'react';
import "./Forum.css"

const ForumPage = () => {
  return (
    <div className="forum-page">
      <header className="forum-header">
        <button className="back-button">{'<'}</button>
        <input type="search" placeholder="Search" />
        <div className="header-icons">
          <button className="about-button">?</button>
          <button className="join-button">+</button>
        </div>
        <h2>Gorilla Tag</h2>

      </header>
      <aside className="sidebar">
        <div className="sidebar-item active">Gorilla Tag</div>
        <div className="sidebar-item">Quest 3 Gaming</div>
        <div className="sidebar-item">Valve Index</div>
        <div className="sidebar-item">Beat Saber</div>
        {/* Add more sidebar items here */}
      </aside>
      <main className="forum-main">
        <div className="forum-post">
          <div className="user-info">
            <span>user</span>
            <span>date</span>
          </div>
          <div className="message">message</div>
        </div>
        {/* Repeat forum-post for each post */}
        <div className="forum-video">
          {/* Placeholder for video */}
        </div>
        <div className="new-post-notification">
          New GT map demonstration
          {/* Icons and other elements */}
        </div>
        <div className="write-message">
          <button className="write-message-button">+</button>
        </div>
      </main>
    </div>
  );
};

export default ForumPage;
