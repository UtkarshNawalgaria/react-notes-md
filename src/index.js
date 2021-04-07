import Amplify from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import config from "./aws-exports";
import "./index.css";
import {NotesProvider} from "./store";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

