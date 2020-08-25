import React, { Component } from "react";
import ReactModal from "./prebuilt/ReactModal";
import CheckboxList from "./CheckboxList";
import ImageList from "./GetArt";
import "../styles/homepage.css";
import NavbarTop from "./NavbarTop";

class Homepage extends Component {
  state = {
    viewImage: {
      id: 0,
      src: "",
      name: "",
      description: "",
      commission: false,
      fanart: false,
      mature: false,
    },
    filter: { commission: false, fanart: false, mature: true },
    modal: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleView = (image) => {
    this.toggle();
    this.setState({ viewImage: image });
  };

  filterImages = () => {
    let images = this.state.images;
    let filter = this.state.filter;

    for (var key in filter) {
      if (filter[key] === true) {
        let filterImages = images.filter((image) => image[key] !== false);
        return filterImages;
      } else {
        return images;
      }
    }
  };

  handleCheckboxChange = (name) => {
    let filter = this.state.filter;
    for (var key in filter) {
      if (key === name) {
        filter[key] = !filter[key];
      }
    }
    this.setState({ filter });
  };

  render() {
    return (
      <React.Fragment>
        <NavbarTop />
        <div className="homepage">
          <p>Giant Wall of Art</p>
          <div className="homepage-checkboxes">
            <CheckboxList
              checkboxObj={this.state.filter}
              onCheckboxChange={this.handleCheckboxChange}
            />
          </div>
        </div>
        <ImageList handleView={this.handleView} />
        <ReactModal
          image={this.state.viewImage}
          modal={this.state.modal}
          onToggle={this.toggle}
        />
      </React.Fragment>
    );
  }
}

export default Homepage;
