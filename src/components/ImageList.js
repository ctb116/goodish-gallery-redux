import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import ArtWall from "./ArtWall";

function ImageList(props) {
  useFirestoreConnect([{ collection: "allImages" }]);

  const images = useSelector((state) => state.firestore.ordered.allImages);

  if (isLoaded(images)) {
    return (
      <React.Fragment>
        <ArtWall images={images} handleView={props.handleView} />
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
