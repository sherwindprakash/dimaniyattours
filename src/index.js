import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import ScrollToTop from "./ScrollToTop";

import "./styles.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
  //</React.StrictMode>
);
serviceWorkerRegistration.register();
