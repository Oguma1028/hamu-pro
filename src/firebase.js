import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBn9pDV8kiJjj2-ktAB-zs8JsthxGm4n3I",
  authDomain: "ham-pro.firebaseapp.com",
  projectId: "ham-pro",
  storageBucket: "ham-pro.appspot.com",
  messagingSenderId: "351613753027",
  appId: "1:351613753027:web:bf019d35f934c58002f476",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessages = ({ name, text }) => {
  messageRef.push({ name, text });
};
