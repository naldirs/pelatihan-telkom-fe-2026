import React from "react";

function GlobalChild({ counter, setCounter }) {
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
}

export default GlobalChild;
