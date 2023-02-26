import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Body.scss";
import imageData from "../../store/initImages";
import { motion } from "framer-motion";
import Grid from "../grid/Grid";
import Footer from "../footer/Footer";

function Body() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 700px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 700px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ type: "twin", duration: "1" }}
      className="Body"
    >
      <Grid />
      {!matches &&
        imageData.map(({ id, src, alt }) => {
          return <Card key={id} src={src} alt={alt} />;
        })}
      <Footer />
    </motion.div>
  );
}

export default Body;
