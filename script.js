<script type="module">
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

  // Aici scrii firebaseConfig
  const firebaseConfig = {
    apiKey: "AIzaSyDkACBZ_7DJOSuko8hIHoBCGrz3EllW-GY",
    authDomain: "healthfit-9de3f.firebaseapp.com",
    projectId: "healthfit-9de3f",
    storageBucket: "healthfit-9de3f.appspot.com",
    messagingSenderId: "1071597823999",
    appId: "1:1071597823999:web:a679009ca5178340f9e9ca"
  };

  // Inițializezi Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Register
  document.getElementById("registerBtn").onclick = function() {
    // ...
  };

  // Login
  document.getElementById("loginBtn").onclick = function() {
    // ...
  };

  // Logout
  document.getElementById("logoutBtn").onclick = function() {
    // ...
  };
</script>
