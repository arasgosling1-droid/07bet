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

// BURASI SENİN ÖZEL PROJE BİLGİLERİN
const firebaseConfig = {
    apiKey: "AIzaSy...", // Firebase panelinden aldığın kendi bilgilerin olmalı
    authDomain: "1xbet-navy.firebaseapp.com",
    databaseURL: "https://1xbet-navy-default-rtdb.firebaseio.com",
    projectId: "1xbet-navy",
    storageBucket: "1xbet-navy.appspot.com",
    messagingSenderId: "...",
    appId: "..."
};

// Firebase'i Başlat
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Diğer sayfalarda kullanabilmek için dışa aktar
export { db, ref, set, push, onValue, get, update, remove };
