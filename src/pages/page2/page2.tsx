import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

function Page2() {
  const inputElem = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElem.current) {
      flatpickr(inputElem.current);
    }
  }, [inputElem]);

  function performRequest() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <h1>Ja som page 2</h1>
      <button onClick={performRequest}>Do request</button>
      <input ref={inputElem} />
    </>
  );
}

export default Page2;
