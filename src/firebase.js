import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRH6bd_p51_F1bNuRZQ-TxmjklThuw40I",
  authDomain: "registration-form-c6f10.firebaseapp.com",
  projectId: "registration-form-c6f10",
  storageBucket: "registration-form-c6f10.appspot.com",
  messagingSenderId: "374698353983",
  appId: "1:374698353983:web:17b084f02190cc5ca85f8a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);


// Initialize Cloud Storage and get a reference to the service


