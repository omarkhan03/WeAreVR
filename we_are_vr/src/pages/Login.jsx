import React, { useState } from 'react';
import './Login.css'; // Make sure the CSS file is in the same directory and named 'Login.css'

function Login({setPage}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // New state to control popup visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login Submitted', { username, password });
  };

  const handleForgotPassword = () => {
    // Simulate email sending logic here
    setShowPopup(true); // Show the popup
    // Optionally, hide the popup after a few seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-footer">
  <button className='submit-button' type="submit">Login</button>
  <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</span>
</div>
      </form>
      {showPopup && (
        <div className="popup">
          Email Sent To reset
        </div>
      )}
    </div>
  );
}

export default Login;