import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import "../../styles/banner.css";


const Banner = () => {

  useFirestoreConnect([
    { collection: "allImages", }
  ])

  const images = useSelector((state) => state.firestore.ordered.allImages);
  const bannerFilter = images.filter((image) => image.tags.banner === true);
  let bannerRandom = bannerFilter[Math.floor(Math.random() * bannerFilter.length)];

  return (
    <div className="banner-crop">
      <img src={bannerRandom.imgUrl} alt="featured drawing"></img>
    </div>
  );
};

export default Banner;
