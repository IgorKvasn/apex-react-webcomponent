import React, { useEffect, useRef, useState } from "react";
// import logo from "./logo.sv g";
import "./App.css";

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(1);

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

  function increment() {
    setValue(value + 1);
  }

  return (
    <div className="App" ref={appRef}>
      <header className="App-header">
        <img
          src="https://rawcdn.githack.com/IgorKvasn/apex-react-webcomponent/94fa2d0d770aa5bad7438f28a97d483201a45d70/build/logo512.png"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
        type="button"
        style={{ marginTop: "1em" }}
        onClick={() => increment()}
      >
        Click me
      </button>
      {value}
    </div>
  );
}

export default App;
