import React from "react";
var firebase = require('firebase');
var firebaseui = require('firebaseui');

let ui = new firebaseui.auth.AuthUI(firebase.auth())


const UI = props => {
  
  console.log(props)

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        disableSignUp: true,
        requireDisplayName: false
        }
    ],
    callbacks: {
      signInSuccess: function() {
        // Do not automatically redirect.
        return false;
      }  
    }
  });

  return (
      <div id="firebaseui-auth-container"></div>
    );

}

export default UI;
