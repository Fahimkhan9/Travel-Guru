import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-uFr3h6fKBLCknM8k8uQa_A4psRRrnjc",
    authDomain: "covid-19-tracker-c60ee.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-c60ee.firebaseio.com",
    projectId: "covid-19-tracker-c60ee",
    storageBucket: "covid-19-tracker-c60ee.appspot.com",
    messagingSenderId: "706428725197",
    appId: "1:706428725197:web:da7a9438b8e821b1388684",
    measurementId: "G-7H091M8LTZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()
const providergoogle = new firebase.auth.GoogleAuthProvider()
const providerfb = new firebase.auth.FacebookAuthProvider()

  export default auth
  export {providergoogle,providerfb}