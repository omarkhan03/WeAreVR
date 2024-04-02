import React, { useState } from 'react';
import './Login.css'; // Make sure the CSS file is in the same directory and named 'Login.css'
import { useHistory } from 'react-router-dom';


function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    if (username === 'Aryan' && password === '123') {
      // Redirect to the home page
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');

      history.push('/Home');

      console.log('Login Submitted', { username, password });
    }
    else {
      alert('Invalid username or password');
    }
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
        <button  className='submit-button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;