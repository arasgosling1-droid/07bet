// firebase-handler.js
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

// Senin özel Firebase bilgilerin
const firebaseConfig = {
  apiKey: "AIzaSyC_An7yZsY2E70w94SoXHnnNK37bncOq5o",
  authDomain: "xbet-5e9b2.firebaseapp.com",
  databaseURL: "https://xbet-5e9b2-default-rtdb.firebaseio.com", // Bu satırı ekledim, veri tabanı için şart!
  projectId: "xbet-5e9b2",
  storageBucket: "xbet-5e9b2.firebasestorage.app",
  messagingSenderId: "109325889532",
  appId: "1:109325889532:web:29fa29604f5c033bef4c79",
  measurementId: "G-NEJ6BEMQMC"
};

// Firebase'i ve Veri Tabanını Başlat
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Fonksiyonları dışa aktar ki index.html ve diğerleri kullanabilsin
export { db, ref, set, push, onValue, get, update, remove };
