import React from "react";
import "./index.css";
import App from "./App";
import ReactWebComponent from "react-web-component";

if (!customElements.get("my-component")) {
  ReactWebComponent.create(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    "my-component"
  );
}
