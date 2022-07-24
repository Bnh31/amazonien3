import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBFf88JWFsckqpumE-WQ74vAC6AO3jM-T4",

  authDomain: "main-e4a6b.firebaseapp.com",

  projectId: "main-e4a6b",

  storageBucket: "main-e4a6b.appspot.com",

  messagingSenderId: "295204615915",

  appId: "1:295204615915:web:2c9280e1f69ea08cf4b0ae"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
// to connect with firestore db


const provider=new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
})

export const auth =getAuth();
export const signInWithGooglePopUp =()=>signInWithPopup(auth,provider)

