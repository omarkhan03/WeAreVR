import React, { useState } from 'react';
import './Login.css'; // Make sure the CSS file is in the same directory and named 'Login.css'
import { useHistory,Link } from 'react-router-dom';
import subscribedForums from '../Data/SubscribedForums';

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPopup, setShowPopup] = useState(false); // New state to control popup visibility

  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    if (username === 'Aryan' && password === '123') {
      // Redirect to the home page
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('SubscribedForums', JSON.stringify(subscribedForums));
      console.log('logged in');
      console.log(localStorage.getItem('SubscribedForums'));
      history.push('/Home');

      console.log('Login Submitted', { username, password });
    }
    else {
      alert('Invalid username or password');
    }
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
          {/* <button className='submit-button' type="submit">Login</button> */}
          <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
        <button className='submit-button' type="submit">Login</button>
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit',fontSize:'0.7rem' }}>Go to Home</Link>
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