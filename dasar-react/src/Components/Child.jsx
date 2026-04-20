import React from "react";

function Child({ name, email }) {
  return (
    <div className="box">
      Hello {name}!. Your email is {email}
    </div>
  );
}

export default Child;
