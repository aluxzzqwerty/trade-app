import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUwWP7jIupVV8LFW2Tb9HDOKuJ-6ejocQ",
  authDomain: "trade-app-10434.firebaseapp.com",
  projectId: "trade-app-10434",
  storageBucket: "trade-app-10434.appspot.com",
  messagingSenderId: "321556963619",
  appId: "1:321556963619:web:6584a243a80a9c03dfec96"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }