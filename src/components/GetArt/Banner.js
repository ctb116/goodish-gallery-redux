import React from "react";
import "../../styles/banner.css";

const Banner = (props) => {
  console.log("banner is rendering")
  return (
    <div className="banner-crop">
      <img src={props.image.imgUrl} alt="featured drawing"></img>
    </div>
  );
};

export default Banner;
