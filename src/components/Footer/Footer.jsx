import React from "react";
import "./footer.css";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ryan Milligan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com">
          <ImFacebook2 />
        </a>
        <a href="https://instgram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ryan Milligan 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
