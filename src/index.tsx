import React from "react";
import "./index.css";
import App from "./App";
import ReactWebComponent from "react-web-component";

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  window.nnCssFiles = [
    "https://rawcdn.githack.com/IgorKvasn/apex-react-webcomponent/dd53c4f75063ff88e48181d1a9b588f2d35050a3/build/static/css/main.54f89c75.chunk.css",
  ];
}

if (!customElements.get("my-component")) {
  ReactWebComponent.create(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    "my-component"
  );
}
