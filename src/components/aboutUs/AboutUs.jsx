import React from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Counts from "../counts/Counts";

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
        <div className="counts">
          <div className="count">
            <p>Projects Done</p>
            <h2>
              +<Counts n={540} />
            </h2>
          </div>
          <div className="count">
            <p>Projects in process</p>
            <h2>
              +<Counts n={12} />
            </h2>
          </div>
          <div className="count">
            <p>Companies Worked</p>
            <h2>
              +<Counts n={36} />
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="about-right"
      >
        <img src="/assets/aboutImage.jpg" alt="LemonAdler" />
      </motion.div>
    </div>
  );
}

export default AboutUs;
