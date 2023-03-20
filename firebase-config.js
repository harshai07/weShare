import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCKI-h-Siv2_gnTFhuUk-D9OY4DgQ2pYVk",
    authDomain: "weshare-76b77.firebaseapp.com",
    databaseURL: "https://weshare-76b77-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "weshare-76b77",
    storageBucket: "weshare-76b77.appspot.com",
    messagingSenderId: "376288806772",
    appId: "1:376288806772:web:b542decaae7dc046534e21"
};

// Initialize Firebase
const firebaseApplication = initializeApp(firebaseConfig);
const firebaseStorage = getStorage();
const firebaseDatabase = getDatabase();

export { firebaseStorage, firebaseDatabase };