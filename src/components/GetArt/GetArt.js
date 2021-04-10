import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import CheckboxList from "../TagsFilterList";
import Banner from "./Banner";
import ArtWall from "./ArtWall";

function GetArt(props) {
  useFirestoreConnect({
    collection: "allImages",
    where: ["tags.mature", "==", false],
  });
  const images = useSelector((state) => state.firestore.ordered.allImages);

  if (isLoaded(images)) {
    const bannerFilter = images.filter((image) => image.tags.banner === true);
    let bannerRandom =
      bannerFilter[Math.floor(Math.random() * bannerFilter.length)];

    return (
      <React.Fragment>
        <Banner image={bannerRandom} />
        <div className="homepage-checkboxes">
          <CheckboxList
            checkboxObj={props.tagsFilter}
            onCheckboxChange={props.onCheckboxChange}
          />
        </div>
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

export default GetArt;
