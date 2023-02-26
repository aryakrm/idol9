import React from "react";
import "./Loading.scss";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="Loading">
      <ReactLoading
        type="spinningBubbles"
        color="#999"
        height={667}
        width={375}
      />
    </div>
  );
}

export default Loading;
