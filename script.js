import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// 🔹 Aici pui configurarea reală a proiectului tău Firebase:
const firebaseConfig = {
  apiKey: "API_KEY_REAL",
  authDomain: "healthfit-9de3f.firebaseapp.com",
  projectId: "healthfit-9de3f",
  storageBucket: "healthfit-9de3f.appspot.com",
  messagingSenderId: "1071597823999",
  appId: "1:1071597823999:web:a679009ca5178340f9e9ca"
};

// Inițializare Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔹 Funcția de Înregistrare (Firebase Auth) + Salvare în Firestore
document.getElementById("registerBtn").onclick = function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      // Salvăm date suplimentare în Firestore (colecția "users")
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        uid: user.uid,
        createdAt: new Date()
      });
      document.getElementById("status").innerText = "✅ Utilizator creat și salvat!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Eroare: " + error.message;
    });
};

// 🔹 Funcția de Autentificare (Firebase Auth)
document.getElementById("loginBtn").onclick = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("status").innerText = "✅ Autentificat!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Eroare: " + error.message;
    });
};

// 🔹 Funcția de Deconectare
document.getElementById("logoutBtn").onclick = function() {
  signOut(auth).then(() => {
    document.getElementById("status").innerText = "✅ Deconectat!";
  });
};
