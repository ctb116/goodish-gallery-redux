import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

const GetArtHOC = (Component, data) => {
  return class extends React.Component {
    state = {
      banner: "something",
      fanart: "something",
      tagsFilter: { mature: true, commission: false, fanart: false },
    }
    
    
    
    
    render() {
      useFirestoreConnect({
        collection: "allImages",
      });
      const images = useSelector((state) => state.firestore.ordered.allImages);

      const handleGetArt = () => {
        const bannerFilter = images.filter((image) => image.tags.banner === true);
        let bannerRandom = bannerFilter[Math.floor(Math.random() * bannerFilter.length)];
        
        const fanartFilter = images.filter((image) => image.tags.fanart === true);
        let fanartRandom = fanartFilter[Math.floor(Math.random() * fanartFilter.length)];
        
        this.setState({banner: bannerRandom, fanart: fanartRandom})
        
      }
    
      
        if (isLoaded(images)) {
          return (
            <Component image={this.state.banner} buttonbackground={this.state.fanart.imgUrl} />
          );
        } else {
          return (
            <React.Fragment>
              <h3>Loading...</h3>
            </React.Fragment>
          );
        }
    }
  }
}

export default GetArtHOC;

      // <React.Fragment>
      //   <Banner image={bannerRandom} />
      //   <div className="homepage-checkboxes">
      //     <TagsFilterList
      //       checkboxObj={props.tagsFilter}
      //       onCheckboxChange={props.onCheckboxChange}
      //       buttonbackground={fanartRandom.imgUrl}
      //     />
      //   </div>
      //   <ArtWall images={images} handleView={props.handleView} />
      // </React.Fragment>