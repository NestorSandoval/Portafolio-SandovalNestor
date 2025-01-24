import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

import SplashCursor from "./components/design-components/SplashCursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SplashCursor />
    <App />
  </React.StrictMode>
);
