import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import TagsFilterList from "../TagsFilterList";
import Banner from "./Banner";
import ArtWall from "./ArtWall";

const GetArt = (props) => {

  // need this listener or else forever loading
  useFirestoreConnect([
    { collection: 'allImages', }
  ])

  const images = useSelector((state) => state.firestore.ordered.allImages);
  const testimages = useSelector((state) => state.firestore.data.allImages);
  // state.firestore.ordered.allImages = [{}, {}, {}]
  // state.firestore.data.allImages = { id: {tags: {} }, id: {}, id: {}}

  // let filterImages = (images, filter) => {

  //   for (var key in filter) {
  //     if (filter[key] === true) {
  //       let filterImages = images.filter((image) => image[key] !== false);
  //       return filterImages;
  //     } else {
  //       return images;
  //     }
  //   }
  // };


  
  
  if (isLoaded(images)) {
    const bannerFilter = images.filter((image) => image.tags.banner === true);
  
    
    // console.log(filterImages(images, props.tagsFilter))
    
    // let random = Math.floor(Math.random() * bannerFilter.length)
    
    let newNumber = props.random
    
    const getRandom = (array, number) => {
      return array[number];
    }

    let test = getRandom(bannerFilter, newNumber)


    const fanartFilter = images.filter((image) => image.tags.fanart === true);
    let fanartRandom = fanartFilter[Math.floor(Math.random() * fanartFilter.length)];



    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

      // Example use:
      // var scores = {
      //     John: 2, Sarah: 3, Janet: 1
      // };

      var filtered = Object.filter(testimages, tag => tag.tags.fanart === true); 





    return (
      <React.Fragment>
        <Banner image={test} />
        <div className="homepage-checkboxes">
          <TagsFilterList
            checkboxObj={props.tagsFilter}
            onCheckboxChange={props.onCheckboxChange}
          />
        </div>
        <ArtWall images={filtered} handleView={props.handleView} />
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
