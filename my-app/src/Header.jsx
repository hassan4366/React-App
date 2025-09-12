import React from "react";
import "./Header.css";

const Header = () => {
    return (
      <header>
        <nav className="header-nav">
          <ul className="header-ul">
            <li>Home</li>
            <li>product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;