import React, { useRef } from "react";
import Navbar from "../components/navBar/Navbar";
import { Form } from "react-bootstrap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";
import Footer from "../components/footer/Footer";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Contact() {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chjs13i",
        "template_nuxp0z1",
        form.current,
        "u3Jl_W8IF_G5E4ifa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="Contact">
      <Navbar />
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "twin", duration: "1" }}
        className="contact-wrapper"
      >
        <div className="info">
          <h1>{t("contact")}</h1>
          <div className="phone">
            <h2 className="titles">
              {" "}
              <LocalPhoneIcon /> {t("phone_numbers")}
            </h2>
            <p>
              <WhatsAppIcon className="wpIcon" /> {t("wp_sub")}
            </p>

            <a href="https://wa.me/905550644012" target="_blank">
              <h2>+971 526 49 08 50</h2>
              <p>Ali Rabiei - Founder of Idol9 and Senior Designer</p>
            </a>
          </div>
          <div className="emails">
            <h2 className="titles">
              {" "}
              <EmailIcon /> {t("email_addresses")}
            </h2>
            <h2>info@idol9.com</h2>
          </div>
          <div className="adress">
            <h2 className="titles">
              {" "}
              <LocationOnIcon /> {t("address")}
            </h2>
            <h5>
              Yukarı Dudullu, Şerifali Mah. Tavukçuyolu cad. <br />
              No: 266, Ümraniye, İstanbul, Turkey
            </h5>
          </div>
          <div className="payment">
            <img src="/tether.svg" alt="" />
            <SiBitcoinsv />
            <FaEthereum />
            <FaCcMastercard />
            <FaCcVisa />
            <FaGooglePay />
            <img src="western-union.svg" alt="westernUnion" />
          </div>
        </div>
        <div className="contact-form">
          <h4 className="titles">{t("form_title")}</h4>
          <Form ref={form} className="form" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="text"
                autoComplete="off"
                placeholder={t("form_name")}
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="number"
                placeholder={t("form_number")}
                name="user_number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="email"
                autoComplete="off"
                placeholder={t("form_email")}
                name="user_email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="text"
                autoComplete="off"
                placeholder={t("form_subject")}
                name="user_subject"
              />
            </Form.Group>
            <textarea
              className="input"
              name="user_message"
              id="message"
              placeholder={t("form_textarea")}
              cols="30"
              rows="5"
            ></textarea>
            <button className="button" type="submit">
              {t("form_submit")}
            </button>
          </Form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact;
