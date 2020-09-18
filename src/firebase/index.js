import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQZoFV2BOreZAqaP76wJ341nzoM9YqlEw",
  authDomain: "fir-react-upload-dd371.firebaseapp.com",
  databaseURL: "https://fir-react-upload-dd371.firebaseio.com",
  projectId: "fir-react-upload-dd371",
  storageBucket: "fir-react-upload-dd371.appspot.com",
  messagingSenderId: "344130574397",
  appId: "1:344130574397:web:2dc1630b2ae86bd432f254",
  measurementId: "G-396E3Y24H3",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };