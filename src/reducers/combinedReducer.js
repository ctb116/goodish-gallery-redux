import { combineReducers, createStore } from "redux";
import { firestoreReducer } from "redux-firestore";  // firestoreReducer for using firestore

export const rootReducer = combineReducers({
  firestore: firestoreReducer,  //need if using firestore
});

//This reducer manages communication with Firebase

// I want to query firebase and get all objects based off a tag boolean








// store structor
// objects allow fast lookups - if you need ordered data use an array
// {
//   ui: {
//      tags: { mature: true, commission: false, fanart: false }
//   }
// }