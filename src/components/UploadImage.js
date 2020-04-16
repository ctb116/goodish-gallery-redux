import React, { Component } from "react";
import firebase from "../firebase";

class UploadImage extends Component {
  state = {
    imageFile: {},
    metaData: {
      contentTpe: "image/png",
    },
  };

  uploadImage = () => {
    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef
      .child("images/" + "HIIIIIIIII.png")
      .put(this.state.imageFile, this.state.metaData);

    console.log(uploadTask);
  };

  handleFileName = (image) => {
    this.setState({ imageFile: image });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <form>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => this.handleFileName(event.target)}
          />
          <input type="submit" onSubmit={this.uploadImage} />
        </form>
      </div>
    );
  }
}

export default UploadImage;
