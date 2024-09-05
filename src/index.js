import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './style.css';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AboutPage from './AboutPage';
import HomePage from './HomePage';

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
  // Redirect the root URL to /home
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  // Handle 404 for undefined routes
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);
