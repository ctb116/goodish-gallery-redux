import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/combinedReducer";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./firebase";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

//Redux store holds application state as single source of truth.
//Access with getState()
//update state with help from reducers and dispatch()

const store = createStore(rootReducer);

//imported firebase config
const rrfProps = {
  firebase,
  config: {
    //any data on users will be stored ina collection called users
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  //entry point for store to be able through application
  //Provider offer all children access to connect()
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
