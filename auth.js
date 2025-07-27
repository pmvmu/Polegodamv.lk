const firebaseConfig = {
  apiKey: "AIzaSyC0mm5lKSQIfyWfnFKxHZvgtJ_-JRiZzkU",
  authDomain: "polegodamv-lk.firebaseapp.com",
  projectId: "polegodamv-lk",
  storageBucket: "polegodamv-lk.firebasestorage.app",
  messagingSenderId: "292171914502",
  appId: "1:292171914502:web:124cc5711a838fd369d287",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore()

function signUp(email, password, username) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      // User info Firestore එකට save කරන්න
      return db.collection("users").doc(user.uid).set({
        email: email, username: username,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      console.log("User registered and data saved!");
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
}


function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Logged in
      console.log("User logged in:", userCredential.user.email);
    })
    .catch((error) => {
      console.error("Error logging in:", error.message);
    });
}