import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzXz5yH9WMpfS9NaNNuhvlD_AAUm1fVm8",
  authDomain: "fb-31175-magic.firebaseapp.com",
  projectId: "fb-31175-magic",
  storageBucket: "fb-31175-magic.appspot.com",
  messagingSenderId: "360079909627",
  appId: "1:360079909627:web:f99bc3386edeec6728865e",
  measurementId: "G-YKJRG6YQZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)