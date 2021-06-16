import React, { Component } from "react";
import ReactModal from "./prebuilt/ReactModal";
import GetArt from "./GetArt/GetArt";
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
    tagsFilter: { mature: true, commission: false, fanart: false },
    modal: false,
    number: 1
  };

  componentDidMount() {
    let random = Math.floor(Math.random() * 2);

    this.setState({number: random})

  }

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
    let filter = this.state.tagsFilter;
    for (let key in filter) {
      if (key === name) {
        filter[key] = !filter[key];
      }
    }
    this.setState({ tagsFilter: filter });
  };

  render() {
    return (
      <React.Fragment>
        <NavbarTop />
        <div className="homepage">
          <p>Giant Wall of Art</p>
        </div>
        <GetArt
          tagsFilter={this.state.tagsFilter}
          onCheckboxChange={this.handleCheckboxChange}
          handleView={this.handleView}
          random={this.state.number}
        />
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
