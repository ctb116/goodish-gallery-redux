import React from "react";
import { useFirestore, useFirestoreDocData } from "reactfire"
// import CheckboxList from "./../CheckboxList";
// import Banner from "./Banner";
// import ArtWall from "./ArtWall";

const GetArt = ({props}) => {

  const artRef = useFirestore()
  .collection('allImages')

  const { status, data } = useFirestoreDocData(artRef)
  //subscribes to collections an unpacks snapshot

  if (isLoaded(images)) {

    return (
      <React.Fragment>

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

export default GetArt;
