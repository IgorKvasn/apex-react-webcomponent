import React, { useState } from "react";
// import logo from "./logo.sv g";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  function increment() {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
