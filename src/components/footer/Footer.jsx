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
          <img src="https://i.ibb.co/H7DtFmb/1.png" alt="LemonAdler-9 Logo" />
        </div>
        <div className="socialMedia">
          <a target="_blank" href="https://www.instagram.com/lemonadler9">
            <ImInstagram />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/lemonadler-9/"
          >
            <ImLinkedin />
          </a>
          <a target="_blank" href="https://wa.me/905340367033">
            <FaWhatsappSquare />
          </a>
          <a target="_blank" href="https://www.behance.net/lemonadler-9">
            <ImBehance2 />
          </a>
          <a target="_blank" href="https://twitter.com/Lemonadler9">
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
