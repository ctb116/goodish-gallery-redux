import React from "react";
import { getImages } from "../services/imageService";
import "../styles/banner.css";

const Banner = () => {
  let image = getImages();
  let rand = image[Math.floor(Math.random() * image.length)];
  return (
    <div className="banner-crop">
      <img src={process.env.PUBLIC_URL + rand.src} alt="featured drawing"></img>
    </div>
  );
};

export default Banner;
