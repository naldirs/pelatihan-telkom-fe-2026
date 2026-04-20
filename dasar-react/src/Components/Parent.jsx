import React from "react";
import Child from "./Child";

function Parent(props) {
  return (
    <>
      <div className="parent-container">
        Parent Component Props = {props.message}
      </div>
      <Child />
    </>
  );
}

export default Parent;
