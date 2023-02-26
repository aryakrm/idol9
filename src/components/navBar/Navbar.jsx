import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  function selectEn() {
    let loc = "/";
    window.location.replace(loc + "?lng=en");
  }
  function selectSv() {
    let loc = "/";
    window.location.replace(loc + "?lng=sv");
  }
  function selectDe() {
    let loc = "/";
    window.location.replace(loc + "?lng=de");
  }
  function selectEs() {
    let loc = "/";
    window.location.replace(loc + "?lng=es");
  }
  function selectFr() {
    let loc = "/";
    window.location.replace(loc + "?lng=fr");
  }
  function selectAr() {
    let loc = "/";
    window.location.replace(loc + "?lng=ar");
  }
  function selectTr() {
    let loc = "/";
    window.location.replace(loc + "?lng=tr");
  }

  // const handleChange = (e) => {
  //   setLang(e.target.value);
  //   let loc = "http://localhost:3000/";
  //   window.location.replace(loc + "?lng=" + e.target.value);
  // };

  // Contains the value and text for the options
  // const languages = [
  //   { value: "", text: "option" },
  //   { value: "en", text: "English" },
  //   { value: "fr", text: "French" },
  //   { value: "de", text: "German" },
  //   { value: "es", text: "Spanish" },
  //   { value: "sv", text: "Swedish" },
  //   { value: "tr", text: "Turkish" },
  // ];

  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  return (
    <motion.div
      initial={{ x: "-100vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="Navbar"
    >
      <div onClick={menuTogglerHandler} className="hamburger">
        {active ? (
          <AiOutlineClose className="_icon" />
        ) : (
          <GiHamburgerMenu className="_icon" />
        )}
      </div>
      {active ? (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="side-menu"
        >
          <ul className="side-menu-list">
            <li>
              <Link to={"/"}>{t("home")}</Link>
            </li>
            <li>
              <Link to={"/about"}>{t("about")}</Link>
            </li>
            <li>
              <Link to={"/contact"}>{t("contact")}</Link>
            </li>
          </ul>
        </motion.div>
      ) : null}
      <Link to={"/"}>
        <div className="logo">
          <img src="logo.png" alt="Idol9 Logo" />
        </div>
      </Link>
      {/* <select value={lang} onChange={handleChange}>
        {languages.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select> */}
      {/* // we are showing the value by using the 
            // keys we have created in the website */}
      {/* <h1>{t("welcome")}</h1>
      <label>{t("choose")}</label> */}
      <div className="flags">
        <span onClick={selectEn} className="fi fi-gb"></span>
        <span onClick={selectSv} className="fi fi-se"></span>
        <span onClick={selectDe} className="fi fi-de"></span>
        <span onClick={selectEs} className="fi fi-es"></span>
        <span onClick={selectFr} className="fi fi-fr"></span>
        <span onClick={selectAr} className="fi fi-sa"></span>
        <span onClick={selectTr} className="fi fi-tr"></span>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to={"/"}>{t("home")}</Link>
        </li>
        <li>
          <Link to={"/about"}>{t("about")}</Link>
        </li>
        <li>
          <Link to={"/contact"}>{t("contact")}</Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default Navbar;
