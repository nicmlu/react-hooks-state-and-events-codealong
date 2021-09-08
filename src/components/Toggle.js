// import React from "react";
import React, { useState } from "react";

function Toggle() {
  const [togg, setTogg] = useState(false);

  function flip() {
    setTogg(togg => !togg);
  }

  const color = togg ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={flip}>
      {togg ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
