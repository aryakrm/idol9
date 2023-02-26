import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar/Navbar";
import "./About.scss";

function About() {
  return (
    <div className="About">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
