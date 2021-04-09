import React from 'react';
var firebase = require('firebase');
var firebaseui = require('firebaseui');

let ui = new firebaseui.auth.AuthUI(firebase.auth())

const UI = () => {

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        disableSignUp: true
        }
    ]
  });

  return (
    <div id="firebaseui-auth-container"></div>
  );

}

export default UI;