import React from "react";
import GlobalChild from "./GlobalChild";

function GlobalParent() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <p>You clicked {counter} times</p>
      <GlobalChild counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default GlobalParent;
