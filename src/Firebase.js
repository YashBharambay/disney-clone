import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4OGATkT29aGNLTfs7OFi1dYcx_8noMjw",
    authDomain: "disney-clone-e7eec.firebaseapp.com",
    projectId: "disney-clone-e7eec",
    storageBucket: "disney-clone-e7eec.appspot.com",
    messagingSenderId: "357750526383",
    appId: "1:357750526383:web:f03afb8a24571830d39f5a",
    measurementId: "G-Z4Q0K3E7E9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider , storage};
  export default db;
