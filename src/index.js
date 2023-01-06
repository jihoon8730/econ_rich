import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import firebase from "firebase/compat/app";
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter base="/">
    <App />
  </HashRouter>
);

reportWebVitals();
