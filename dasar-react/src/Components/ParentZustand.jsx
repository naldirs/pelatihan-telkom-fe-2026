import React from "react";
import { useCounterStore } from "../stores/useCounterStore";
import ChildZustand from "./ChildZustand";

function ParentZustand() {
  const count = useCounterStore((state) => state.count); // Access the count state from the store
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p>Count: {count}</p>
      <ChildZustand />
    </div>
  );
}

export default ParentZustand;
