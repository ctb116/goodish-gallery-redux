import React, { Component } from "react";
import UploadImage from "./UploadImage";
import CheckboxList from "./CheckboxList";

class UploadFirebase extends Component {
  state = {
    imgUrl: "",
    name: "name",
    description: "string",
    tags: { commission: false, fanart: false, mature: false, banner: false },
  };

  handleCheckboxChange = (name) => {
    let tags = this.state.tags;
    for (var key in tags) {
      if (key === name) {
        tags[key] = !tags[key];
      }
    }
    this.setState({ tags });
  };

  render() {
    console.log(this.state.tags);
    return (
      <div>
        <CheckboxList
          checkboxObj={this.state.tags}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <UploadImage />
      </div>
    );
  }
}

export default UploadFirebase;
