import React from 'react';

// Style
import "./styles/css/main.css";

// Redux
import { Provider } from "react-redux";
import store from "./redux/Store";

// Routes
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;