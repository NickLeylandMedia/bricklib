// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Firestore
import {
  getFirestore,
  doc,
  addDoc,
  collection as fsCollection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcOZWGr4sEQHYrRzRkOuGm4q8fiW61J0s",
  authDomain: "nick-leyland-main-site-94cb8.firebaseapp.com",
  projectId: "nick-leyland-main-site-94cb8",
  storageBucket: "nick-leyland-main-site-94cb8.appspot.com",
  messagingSenderId: "870587802492",
  appId: "1:870587802492:web:f9376b5dfb5c285eeb7af9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* Functions */
async function submitMessage(
  collection: any,
  name: string,
  email: string,
  message: string
) {
  // Add a new document with a generated id.
  const action = await addDoc(fsCollection(db, collection), {
    name: name,
    email: email,
    message: message,
  });

  return action;
}

/* End Functions */

export { submitMessage };
