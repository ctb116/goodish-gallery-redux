import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import TagsFilterList from "../TagsFilterList";
import Banner from "./Banner";
import ArtWall from "./ArtWall";

const GetArt = (props) => {
  useFirestoreConnect({
    collection: "allImages",
  });
  const images = useSelector((state) => state.firestore.ordered.allImages);

  if (isLoaded(images)) {
    const bannerFilter = images.filter((image) => image.tags.banner === true);
    let bannerRandom = bannerFilter[Math.floor(Math.random() * bannerFilter.length)];

    const fanartFilter = images.filter((image) => image.tags.fanart === true);
    let fanartRandom = fanartFilter[Math.floor(Math.random() * fanartFilter.length)];

    return (
      <React.Fragment>
        <Banner image={bannerRandom} />
        <div className="homepage-checkboxes">
          <TagsFilterList
            checkboxObj={props.tagsFilter}
            onCheckboxChange={props.onCheckboxChange}
            buttonbackground={fanartRandom.imgUrl}
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
