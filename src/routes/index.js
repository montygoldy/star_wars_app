import React, { Component } from "react";

// Lib
import Helmet from "react-helmet";
import loadable from "loadable-components";
import Favicon from 'react-favicon';

// Routes
import { Route, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

//Pages Split Loading
const HomePage = loadable(() =>
  import("../pages/home/components/layout/HomePage")
);

class Routes extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Favicon 
          url={require('')}
        /> */}
        {/* SEO */}
        <Helmet
          htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
          titleTemplate={`%s | Star Wars`}
          titleAttributes={{ itemprop: "name", lang: "en" }}
          meta={[
            { name: "description", content: "Star Wars" },
            { name: "viewport", content: "width=device-width, initial-scale=1" }
          ]}
        />
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={HomePage}
          />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;