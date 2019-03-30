import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import { getImages } from "../services/imageService";
import CheckboxList from "./CheckboxList";
import "../styles/homepage.css";

class Homepage extends Component {
  state = {
    images: getImages(),
    filter: { commission: false, fanart: false, mature: false }
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
    return (
      <React.Fragment>
        <CheckboxList
          checkboxObj={this.state.filter}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <StackGrid columnWidth={"30%"}>
          {this.state.images.map(image => (
            <img src={image.url} alt={image.name} style={{ width: "100%" }} />
          ))}
        </StackGrid>
      </React.Fragment>
    );
  }
}

export default Homepage;
