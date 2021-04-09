import React, { Component } from "react";
import UploadImage from "./UploadImage";
import ImageInfoForm from "../components/ImageInfoForm";
import UI from './FirebaseUI';

class UploadFirebase extends Component {
  state = {
    imgUrl: "",
    name: "",
    description: "",
    date: 1,
    year: 2020,
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

  handleDate = (month) => {
    let date = parseInt(month);
    this.setState({ date });
  };

  handleYear = (whatYear) => {
    let year = parseInt(whatYear);
    this.setState({ year });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <UI/>
        <ImageInfoForm
          onImageNameChange={this.handleImageName}
          onImageDescriptionChange={this.handleImageDescription}
          onCheckboxChange={this.handleCheckboxChange}
          onDateChange={this.handleDate}
          onYearChange={this.handleYear}
          imageInfo={this.state}
        />
        <UploadImage state={this.state} onDownloadURL={this.handleImageUrl} />
      </div>
    );
  }
}

export default UploadFirebase;
