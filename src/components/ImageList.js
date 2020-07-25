import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function ImageList() {
  // The useFirestoreConnect() hook comes from react-redux-firebase.
  useFirestoreConnect([{ collection: "allImages" }]);

  // The useSelector() hook comes from react-redux.
  const images = useSelector((state) => state.firestore.ordered.allImages);

  // react-redux-firebase also offers a useful isLoaded() function.
  if (isLoaded(images)) {
    console.log(images);
    return (
      <React.Fragment>
        <hr />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

export default ImageList;
