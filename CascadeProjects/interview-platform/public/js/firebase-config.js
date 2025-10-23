// Firebase Configuration
// Remplacez ces valeurs avec votre config Firebase depuis la console

const firebaseConfig = {
  apiKey: "AIzaSyClSLxfiONkQcK2OmWIYYqpnEMsDrInF40",
  authDomain: "interview-platform-6d74e.firebaseapp.com",
  databaseURL: "https://interview-platform-6d74e-default-rtdb.firebaseio.com",  // IMPORTANT pour Realtime DB
  projectId: "interview-platform-6d74e",
  storageBucket: "interview-platform-6d74e.firebasestorage.app",
  messagingSenderId: "245466709341",
  appId: "1:245466709341:web:9cbb583c241fb1dfe6fcb4",
  measurementId: "G-VK0SCMWXPV"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export services (REALTIME DATABASE)
const auth = firebase.auth();
const db = firebase.database();  // ← Realtime Database au lieu de Firestore

// Helper functions
async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

async function getIdToken() {
  const user = await getCurrentUser();
  if (!user) throw new Error('Not authenticated');
  return await user.getIdToken();
}

// Export functions
window.firebaseAuth = auth;
window.firebaseDb = db;
window.getCurrentUser = getCurrentUser;
window.getIdToken = getIdToken;
