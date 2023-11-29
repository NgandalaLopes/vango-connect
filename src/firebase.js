//src/firebase.js
import { initializeApp } from 'firebase/app';
import { 
getAuth, 
createUserWithEmailAndPassword, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signOut 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDeJMppi9iXPDDAyqPyOADBQrIhyt_SlTw",
    authDomain: "vango-connect.firebaseapp.com",
    projectId: "vango-connect",
    storageBucket: "vango-connect.appspot.com",
    messagingSenderId: "380269534964",
    appId: "1:380269534964:web:78d8756baf4b0c45f148a1"
  };


  initializeApp(firebaseConfig);

  //init services
  const auth = getAuth();
  
  export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
  } 