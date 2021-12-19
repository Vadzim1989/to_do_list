import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBIwJFuaUvTEG3y6s_KfdJD2Tuhz8hCzI",
  authDomain: "todo-itstep.firebaseapp.com",
  projectId: "todo-itstep",
  storageBucket: "todo-itstep.appspot.com",
  messagingSenderId: "11436188759",
  appId: "1:11436188759:web:a4f8d1f9681cccb068af12"
};

export const app = initializeApp(firebaseConfig);