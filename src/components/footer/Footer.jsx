import React from "react";
import "./Footer.scss";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <p>info@lemonadler-9.com</p>
      </div>
      <div className="foorter-menu">
        <div className="logo">
          <img src="logo.png" alt="idol9 Logo" />
        </div>
        <div className="socialMedia">
          <a
            target="_blank"
            href="https://www.instagram.com/idol9.architecture/"
          >
            <ImInstagram />
          </a>
          <a target="_blank" href="http://www.linkedin.com/in/idol9">
            <ImLinkedin />
          </a>
          <a target="_blank" href="https://wa.me/905550644012">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
