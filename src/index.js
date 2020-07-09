import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import configureStore from "./redux/configureStore";
// This will provide Redux store data to React components
import { Provider as ReduxProvider } from "react-redux";

// if app is server-render, pass initial state into the store here
const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
