import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC9IjhlJGTlsQJ1HLzFWoJeutGW67qFHds",
    authDomain: "olx-clone-5de59.firebaseapp.com",
    projectId: "olx-clone-5de59",
    storageBucket: "olx-clone-5de59.appspot.com",
    messagingSenderId: "41008322842",
    appId: "1:41008322842:web:b76de48fc240cd57d7b4a3",
    measurementId: "G-0HHTFK2S3P"
  };

export default firebase.initializeApp(firebaseConfig)