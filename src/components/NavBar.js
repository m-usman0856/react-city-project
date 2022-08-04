import React from "react";
import "../sass/nav.scss";
import logo from "../img/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tour"></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
