import React from "react";
import "../../styles/banner.css";

const Banner = (props) => {
  return (
    <div className="banner-crop">
      <img src={props.image.imgUrl} alt="featured drawing"></img>
    </div>
  );
};

export default Banner;
