import React, { Component } from "react";
import { getImages } from "../services/imageService";
import "../styles/banner.css";

class Banner extends Component {
  state = {
    rand: getImages()[Math.floor(Math.random() * getImages().length)]
  };
  render() {
    return (
      <div className="banner-crop">
        <img
          src={process.env.PUBLIC_URL + this.state.rand.src}
          alt="featured drawing"
        ></img>
      </div>
    );
  }
}

export default Banner;
