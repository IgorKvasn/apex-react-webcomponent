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

  function openApexDialog() {
    const randomValue = new Date();

    //@ts-expect-error
    apex
      //.item("APEX_VARIABLE_1")
      .item("APEX_USERNAME")
      .setValue(`random-vaue-${randomValue.getTime()}`);
    // setTimeout(() => {
    const event = new Event("CallModal");
    document.dispatchEvent(event);
    // }, 5_000);
  }

  return (
    <>
      <h1>Ja som page 2</h1>
      <div>
        <button onClick={performRequest}>Do request</button>
      </div>
      <div>
        <input ref={inputElem} />
      </div>
      <div>
        <button onClick={openApexDialog}>Open dialog</button>
      </div>
    </>
  );
}

export default Page2;

/* 
const event = new Event('CallModal');
document.dispatchEvent(event)
apex.item('APEX_USERNAME').setValue('aku ches')
apex.item('APEX_USERNAME').getValue()
document.dispatchEvent(event)
 */
