import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./state/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
