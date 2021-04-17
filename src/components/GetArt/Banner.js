import React from "react";
import GetArtHOC from './GetArt';
import "../../styles/banner.css";

const Banner = (props) => {
  console.log("banner is rendering")
  return (
    <div className="banner-crop">
      <img src={props.image.imgUrl} alt="featured drawing"></img>
    </div>
  );
};

const EnhancedBanner = GetArtHOC(Banner)

export default EnhancedBanner;
