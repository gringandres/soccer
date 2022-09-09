import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUY-vZHTiEbb0g29u_qY35SOSaih9SS9A",
  authDomain: "team-tournament-cdcb2.firebaseapp.com",
  projectId: "team-tournament-cdcb2",
  storageBucket: "team-tournament-cdcb2.appspot.com",
  messagingSenderId: "202303010557",
  appId: "1:202303010557:web:50ee05c474ff1a760e7094"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)