import React from "react";

// Routes
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated, ...props }) => {
  if (!isAuthenticated) {
    return <Redirect to="/error" />
  }
  return <Route {...props} />;
}

export default ProtectedRoutes;