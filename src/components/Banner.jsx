import React, { Component } from "react";
import { getImages } from "../services/imageService";
import "../styles/banner.css";

class Banner extends Component {
  state = {
    banner: {}
  };

  componentDidMount() {
    let bannerFilter = getImages().filter(image => image.banner === true);
    let banner = bannerFilter[Math.floor(Math.random() * bannerFilter.length)];
    this.setState({ banner });
  }

  render() {
    return (
      <div className="banner-crop">
        <img
          src={process.env.PUBLIC_URL + this.state.banner.src}
          alt="featured drawing"
        ></img>
      </div>
    );
  }
}

export default Banner;
