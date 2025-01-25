import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Ensure Tailwind CSS is applied
import SignIn from "./components/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById("root")
);
