## If the page isn't rendering
The issue most likely has to do with Importing react-router-dom in main.jsx for some reason it doesn't work well with vite

To confirm its a react-router-dom issue, replace main.jsx with

`import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Login from './pages/Login';
import VisitProfile from './pages/VisitProfile';
import './index.css'
import './App.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>Hello</>
  </React.StrictMode>
);`

If hello world appears, then this confirms the issue was with importing react-router-dom

Here is a useful like I found https://stackoverflow.com/questions/74833465/react-router-dom-is-not-working-with-vite

this might work better
https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e
