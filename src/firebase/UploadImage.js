import React, { useState } from "react";
import { storage } from "../firebase";
import { useFirestore } from "react-redux-firebase";

const UploadImage = (props) => {
  //hooks - useState
  const [imageAsFile, setImageAsFile] = useState("");
  //new State variable called ImageAsUrl
  //this local state will be preserved between re-renders
  //useState returns pair - the current state and a method to update it
  //must provide useState with an initial state - does not have to be an object

  console.log(imageAsFile);

  //holds the entire finished object for database
  // console.log(imageAsUrl);

  const firestore = useFirestore();

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
