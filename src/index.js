import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

window.React = React;
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
