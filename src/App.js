import React, { Component } from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;
