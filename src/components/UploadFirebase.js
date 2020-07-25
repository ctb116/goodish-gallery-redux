import React, { Component } from "react";
import UploadImage from "./UploadImage";
import CheckboxList from "./CheckboxList";

//create prop for image url so this whole state is ready for firebase
//same for name and description

class UploadFirebase extends Component {
  state = {
    imgUrl: "",
    name: "",
    description: "",
    tags: { commission: false, fanart: false, mature: false, banner: false },
  };

  handleImageUrl = (url) => {
    this.setState({ imgUrl: url });
  };

  handleImageName = (name) => {
    this.setState({ name });
  };

  handleImageDescription = (desc) => {
    this.setState({ description: desc });
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
    console.log(this.state);
    return (
      <div>
        <CheckboxList
          checkboxObj={this.state.tags}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <UploadImage
          onDownloadURL={this.handleImageUrl}
          onImageNameChange={this.handleImageName}
          onImageDescriptionChange={this.handleImageDescription}
        />
      </div>
    );
  }
}

export default UploadFirebase;
