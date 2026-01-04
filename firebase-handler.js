import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    push, 
    onValue, 
    get, 
    update, 
    remove 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_An7yZsY2E70w94SoXHnnNK37bncOq5o",
  authDomain: "xbet-5e9b2.firebaseapp.com",
  // EKRAN GÖRÜNTÜSÜNDEKİ GERÇEK LİNKİNİ BURAYA YAZDIM:
  databaseURL: "https://xbet-5e9b2-default-rtdb.europe-west1.firebasedatabase.app", 
  projectId: "xbet-5e9b2",
  storageBucket: "xbet-5e9b2.firebasestorage.app",
  messagingSenderId: "109325889532",
  appId: "1:109325889532:web:29fa29604f5c033bef4c79",
  measurementId: "G-NEJ6BEMQMC"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, onValue, get, update, remove };
