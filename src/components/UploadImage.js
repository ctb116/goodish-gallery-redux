import React, { useState } from "react";
import { storage } from "../firebase";

const UploadImage = (props) => {
  //hooks - useState
  const allInputs = {
    imgUrl: "",
    name: "name",
    description: "string",
    commission: false,
    fanart: false,
    mature: false,
    banner: false,
  };
  const [imageAsFile, setImageAsFile] = useState("");
  //new State variable called ImageAsUrl
  //this local state will be preserved between re-renders
  //useState returns pair - the current state and a method to update it
  //must provide useState with an initial state - does not have to be an object
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  console.log(imageAsFile);

  //holds the entire finished object for database
  // console.log(imageAsUrl);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    console.log("event " + image);
    //setImageAsFile - stage image for post
    setImageAsFile(() => image);
  };

  const handleFirebaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...

    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    //uploading to Storage. ref is root directory. put method image
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        //storage - from firebase - gets functions
        storage
          //.ref() - references the Storage directory by .child()
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          .then((fireBaseUrl) => {
            props.onDownloadURL(fireBaseUrl);
            // setImageAsUrl((prevObject) => ({
            //   ...prevObject,
            //   imgUrl: fireBaseUrl,
            // }));
          });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleFirebaseUpload}>
        <input type="file" onChange={handleImageAsFile} />
        <input
          type="text"
          onChange={(e) => props.onImageNameChange(e.target.value)}
        />
        {/* <input
          name="fanart"
          type="checkbox"
          checked={allInputs.fanart}
          onChange={this.handleCheckboxChange}
        /> */}
        <input
          type="text"
          onChange={(e) => props.onImageDescriptionChange(e.target.value)}
        />
        <button>upload to firebase</button>
      </form>
      <img src={imageAsUrl.imgUrl} alt="image tag" />
    </div>
  );
};

export default UploadImage;

// class UploadImage extends Component {
//   state = {
//     imageFile: {},
//     metaData: {
//       contentTpe: "image/png",
//     },
//   };

//   // uploadImage = () => {
//   //   console.log("hey");
//   //   var storageRef = firebase.storage().ref();
//   //   var uploadTask = storageRef
//   //     .child("images/" + "HIIIIIIIII.png")
//   //     .put(this.state.imageFile, this.state.metaData);

//   //   console.log(uploadTask);
//   // };

//   // handleFileName = (image) => {
//   //   this.setState({ imageFile: image });
//   // };

//   render() {
//     console.log(this.state);

//     return (
//       <div>
//         <form>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(event) => this.handleFileName(event.target)}
//           />
//           <input type="submit" onSubmit={this.uploadImage} />
//         </form>
//       </div>
//     );
//   }
// }

// export default UploadImage;
