import React, { useState } from "react";
import "./page1.css";

function Page1() {
  const [value, setValue] = useState(1);

  function increment() {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://rawcdn.githack.com/IgorKvasn/apex-react-webcomponent/94fa2d0d770aa5bad7438f28a97d483201a45d70/build/logo512.png"
          className="App-logo"
          alt="logo"
        />

        <button
          type="button"
          style={{ marginTop: "1em" }}
          onClick={() => increment()}
        >
          Click me
        </button>
        <div>{value}</div>
      </header>
    </div>
  );
}

export default Page1;
