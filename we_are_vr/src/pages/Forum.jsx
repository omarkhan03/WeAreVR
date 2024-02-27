import React from 'react';

function Forum({ setPage }) {
  return (
    <div>
      <h1>Forum Page</h1>
      <button onClick={() => setPage('home')}>Go to Home</button>
      <button onClick={() => setPage('profile')}>Go to Profile</button>
    </div>
  );
}

export default Forum;
