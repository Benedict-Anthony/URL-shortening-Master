import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import Heading from "./shared/Heading";
import Button from "./shared/Button";
import logo from "../images/logo.svg";

import "../UI/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer__intro">
        <div className="container">
          <Heading>
            <h1> Boost your links today</h1>
            <Button text="Get Started" />
          </Heading>
        </div>
      </div>
      <div className="container">
        <div className="footer__infos">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <ul className="footer_items">
            <h4>Features</h4>
            <li>
              <a href="#somewhere"> Link Shortening </a>
            </li>
            <li>
              <a href="#somewhere">Branded links </a>
            </li>
            <li>
              <a href="#somewhere">Analytics </a>
            </li>
          </ul>

          <ul className="footer_items">
            <h4>Resources</h4>
            <li>
              <a href="#somewhere"> Blog</a>
            </li>
            <li>
              <a href="#somewhere">Developers </a>
            </li>
            <li>
              <a href="#somewhere">Support</a>
            </li>
          </ul>

          <ul className="footer_items">
            <h4>Company</h4>
            <li>
              <a href="#somewhere">about</a>
            </li>
            <li>
              <a href="#somewhere">Our team</a>
            </li>
            <li>
              <a href="#somewhere">Careers</a>
            </li>
            <li>
              <a href="#somewhere">Contact</a>
            </li>
          </ul>

          <div className="social__links">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
