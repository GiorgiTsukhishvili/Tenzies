import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-main">
      <h1 className="header">Tenzies</h1>
      <p className="header-pharagrap">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </div>
  );
}

export default Header;
