import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Login from './pages/Login';
import VisitProfile from './pages/VisitProfile';
import './index.css'
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/VisitProfile",
    element: <VisitProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
