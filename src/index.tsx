import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactWebComponent from "react-web-component";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// @ts-ignore
(window.nnCssFiles || []).forEach((file) => {
  var link = document.createElement("link");
  link.href = file;
  link.type = "text/css";
  link.rel = "stylesheet";
  //link.media = "screen,print";

  document.getElementsByTagName("head")[0].appendChild(link);
});

if (!customElements.get("my-component")) {
  ReactWebComponent.create(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    "my-component"
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
