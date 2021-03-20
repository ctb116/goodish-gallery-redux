import React, { useState } from "react";
import { storage } from "../firebase";
import { useFirestore } from "react-redux-firebase";

const UploadImage = (props) => {
  const [imageAsFile, setImageAsFile] = useState("");
  const firestore = useFirestore();

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    console.log("event " + image);
    setImageAsFile(() => image);
  };

  const handleFirebaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");

    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            props.onDownloadURL(fireBaseUrl);
          });
      }
    );
  };

  const addImageObjToFirebase = (event) => {
    event.preventDefault();
    return firestore.collection("allImages").add(props.state);
  };

  return (
    <div>
      <form onSubmit={handleFirebaseUpload}>
        <input type="file" onChange={handleImageAsFile} />
        <button>upload to firebase</button>
      </form>
      <form onSubmit={addImageObjToFirebase}>
        <button>upload to the real deal!</button>
      </form>
    </div>
  );
};

export default UploadImage;
