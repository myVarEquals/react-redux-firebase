import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDUcp9aE0upTYRFIWQtoA9pzxI0jZl1f3c",
    authDomain: "react-redux-firebase-da45f.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-da45f.firebaseio.com",
    projectId: "react-redux-firebase-da45f",
    storageBucket: "react-redux-firebase-da45f.appspot.com",
    messagingSenderId: "869650231173"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;