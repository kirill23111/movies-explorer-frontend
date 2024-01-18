import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './components/App/App';
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";
import { Movies } from './components/Movies/Movies';
import { SavedMovies } from './components/SavedMovies/SavedMovies';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/saved-movies",
    element: <SavedMovies />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
