import React from "react";
import { Link, MemoryRouter as Router, Route, Routes } from "react-router-dom";
// import ReactWebComponent from "react-web-component";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";

import { useEffect, useRef } from "react";
// import logo from "./logo.sv g";
// import "./App.css";

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!appRef.current) {
      // @ts-ignore
      (window.nnCssFiles || []).forEach((file) => {
        var link = document.createElement("link");
        link.href = file;
        link.type = "text/css";
        link.rel = "stylesheet";
        //link.media = "screen,print";

        appRef.current!.appendChild(link);
      });
    }
  }, [appRef]);

  const loggedUser = (
    document.querySelector("#APEX_USERNAME") as HTMLInputElement
  )?.value;
  console.log("logged user", loggedUser);

  return (
    <div ref={appRef}>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "8em",
            justifyContent: "space-around",
            fontSize: "28px",
            marginBottom: "1em",
          }}
        >
          <Link to="/">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </div>

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
