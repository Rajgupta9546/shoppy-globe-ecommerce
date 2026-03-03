import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyApp</div>

      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;