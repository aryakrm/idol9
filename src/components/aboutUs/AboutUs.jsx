import React from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="AboutUs">
      <motion.div
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="about-left"
      >
        <h1>{t("who_are_we")}</h1>
        <p>Idol9 {t("about_desc")}</p>
        <img className="logo" src="logo.png" alt="Idol9 Logo" />
      </motion.div>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="about-right"
      >
        <img
          src="https://i.ibb.co/BgtGKsY/2023-01-16-16-57-56.jpg"
          alt="LemonAdler"
        />
      </motion.div>
    </div>
  );
}

export default AboutUs;
