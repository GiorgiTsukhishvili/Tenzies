import React from "react";
import "./Die.css";

function Die({ diceState, value, isHolding, id }) {
  return (
    <div
      className={diceState ? "die-face-true" : "die-face-false"}
      onClick={() => isHolding(id)}
    >
      <h2 className="die-number">{value}</h2>
    </div>
  );
}

export default Die;
