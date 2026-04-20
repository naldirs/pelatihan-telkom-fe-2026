import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <button onClick={handleClick}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default Counter;
