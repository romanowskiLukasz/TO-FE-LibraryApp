import React from "react";
import "./Banner.css";
import baner from "../../img/baner.png";

function Banner() {
  return (
    <div className="banner_container">
      <img src={baner} alt={"banner photo"}></img>
    </div>
  );
}

export default Banner;
