
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcVLSdt2cQOIeSN3zD4DqjIOjS15aSEqM",
  authDomain: "talkitout-87046.firebaseapp.com",
  projectId: "talkitout-87046",
  storageBucket: "talkitout-87046.appspot.com",
  messagingSenderId: "633336298984",
  appId: "1:633336298984:web:42101a3f654f654e58785d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();