import { useState } from "react";

import logo from "../images/logo.svg";
import "../UI/header.css";

import { FaBars } from "react-icons/fa";

import Button from "./shared/Button";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showNavbar = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="" />
          </div>
          <div className={`navbar__links ${toggle && "active"}`}>
            <ul className="navbar__items">
              <li className="navbar__items__item">
                <a href="#features">Features</a>
              </li>
              <li className="navbar__items__item">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="navbar__items__item">
                <a href="#resources">Resources</a>
              </li>
            </ul>

            <ul className="navbar__btn">
              <li className="navbar__items__item">
                <a href="#login">Login</a>
              </li>
              <div className="header-btn">
                <Button text="Sign Up" />
              </div>
            </ul>
          </div>

          <FaBars className="navToggler" onClick={showNavbar} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
