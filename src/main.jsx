import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextApi from "./context/ContextApi";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>
    <App />
  </ContextApi>
);
