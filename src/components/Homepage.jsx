import React, { Component } from "react";
import ReactModal from "./prebuilt/ReactModal";
import GetArt from "./GetArt/GetArt";
import "../styles/homepage.css";
import NavbarTop from "./NavbarTop";
import EnhancedBanner from './GetArt/Banner';

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

  handleCheckboxChange = (name) => {
    console.log(name);
    let filter = this.state.tagsFilter;
    for (let key in filter) {
      if (key === name) {
        filter[key] = !filter[key];
      }
    }
    this.setState({ tagsFilter: filter });
  };

  render() {
    console.log(this.state.tagsFilter)
    return (
      <React.Fragment>
        <NavbarTop />
        <div className="homepage">
          <p>Giant Wall of Art</p>
        </div>
        <EnhancedBanner/>
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
