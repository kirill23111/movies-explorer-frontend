import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, loggedIn, ...props }) => {
  if (loggedIn === null) {
    return null;
  }

  return loggedIn ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
