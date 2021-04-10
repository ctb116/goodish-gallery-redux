import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Comic from "./components/Comic";
import Homepage from "./components/Homepage";
import Hire from "./components/Hire";
import Navbar from "./components/Navbar";
import UploadFirebase from "./firebase/UploadFirebase";
import UI from './firebase/FirebaseUI'

class App extends Component {
  state = {
    user: false
  }

  handleSignIn = () => {
    this.setState({ user: true })
  }

  render() {
    const { user } = this.state;
    console.log(user);

    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/aboutme" component={About} />
          <Route path="/hireme" component={Hire} />
          <Route path="/cornstaff/:id" component={Comic} />
          <Route path='/login' render={() => {
              return <UI onSignIn={this.handleSignIn}/>
          }}
          />
          <Route 
            path='/admin'
            render={() => {
              if(!user) return <Redirect to='/login' />
              return <UploadFirebase />
            }}
          />
          <Route path="/" component={Homepage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
