import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Intro.scss";

function Intro() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function prev() {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(4);
    }
  }
  function next() {
    setIndex(index + 1);
    if (index === 4) {
      setIndex(0);
    }
  }

  return (
    <div className="Carousel-wrapper">
      <div className="controllers">
        <button onClick={prev}>
          <ArrowBackIosIcon />
        </button>
        <button onClick={next}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        pause={false}
        controls={false}
      >
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/assets/5.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/assets/1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/assets/2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/assets/3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/assets/4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div class="mouse"></div>
    </div>
  );
}

export default Intro;
