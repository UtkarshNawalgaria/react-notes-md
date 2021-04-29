import Amplify from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import config from "./aws-exports";
import "./index.css";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./hooks/auth";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
