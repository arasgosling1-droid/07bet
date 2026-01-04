// firebase-handler.js - Sistemin Veri Merkezi
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

// Bu bilgiler Firebase Console > Project Settings > General kısmındaki bilgilerle eşleşmelidir.
const firebaseConfig = {
    apiKey: "AIzaSy-SENIN-API-KEYIN", // Burayı kendi keyinle değiştir
    authDomain: "1xbet-navy.firebaseapp.com",
    databaseURL: "https://1xbet-navy-default-rtdb.firebaseio.com",
    projectId: "1xbet-navy",
    storageBucket: "1xbet-navy.appspot.com",
    messagingSenderId: "GONDERICI-ID-KODUN", // Burayı kendi ID'nle değiştir
    appId: "APP-ID-KODUN" // Burayı kendi ID'nle değiştir
};

// Firebase'i Başlat
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Tüm fonksiyonları diğer sayfalarda (index, profile, admin) kullanabilmek için ihraç ediyoruz.
export { db, ref, set, push, onValue, get, update, remove };
