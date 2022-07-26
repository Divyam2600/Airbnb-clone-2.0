import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOhm66Nf4Jc_UaGoMKKCtdJ2sDRcGa-xs",
  authDomain: "airbnb-clone-a9076.firebaseapp.com",
  projectId: "airbnb-clone-a9076",
  storageBucket: "airbnb-clone-a9076.appspot.com",
  messagingSenderId: "559772176623",
  appId: "1:559772176623:web:82b74c968ba1077ba98b1a",
  measurementId: "G-50NLY76TQ9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
