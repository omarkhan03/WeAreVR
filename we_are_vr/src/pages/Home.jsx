import React from 'react';

function Home({ setPage }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setPage('forum')}>Go to Forum</button>
      <button onClick={() => setPage('profile')}>Go to Profile</button>
    </div>
  );
}

export default Home