import { Image } from "antd";
import React from "react";
import "./Card.scss";

function Card({ id, src, alt }) {
  return (
    <div className="Card">
      <Image className="img" src={src} alt={alt} />
    </div>
  );
}

export default Card;
