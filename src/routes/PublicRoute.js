import React from "react";

// Routes
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ ...props }) => {
  return <Route {...props} />
}

export default PublicRoute;