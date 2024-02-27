import React from 'react';

function Profile({ setPage }) {
  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => setPage('home')}>Go to Home</button>
      <button onClick={() => setPage('forum')}>Go to Forum</button>
    </div>
  );
}

export default Profile;
