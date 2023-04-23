import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// var mountNode = document.getElementById("app");
// ReactDOM.render(<App name="Jane" />, mountNode);

