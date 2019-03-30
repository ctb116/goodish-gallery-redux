import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import { getImages } from "../services/imageService";
import CheckboxList from "./CheckboxList";
import "../styles/homepage.css";

class Homepage extends Component {
  state = {
    images: getImages(),
    filter: { commission: false, fanart: false, mature: true },
    filteredImages: []
  };

  filterImages = () => {
    let images = this.state.images;
    let filter = this.state.filter;
    for (var key in filter) {
      if (filter[key] === true) {
        let filterImages = images.filter(image => image[key] !== false);
        return filterImages;
      } else {
        return images;
      }
    }
  };

  handleCheckboxChange = name => {
    let filter = this.state.filter;
    for (var key in filter) {
      if (key === name) {
        filter[key] = !filter[key];
      }
    }
    this.setState({ filter });
  };

  render() {
    console.log(this.state.filter);
    let images = this.filterImages();
    console.log(images);
    return (
      <React.Fragment>
        <CheckboxList
          checkboxObj={this.state.filter}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <StackGrid columnWidth={"30%"}>
          {images.map(image => (
            <img
              src={image.url}
              alt={image.name}
              style={{ width: "100%" }}
              key={image.id}
            />
          ))}
        </StackGrid>
      </React.Fragment>
    );
  }
}

export default Homepage;
