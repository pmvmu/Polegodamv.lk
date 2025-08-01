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

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  signUp(email, password, username);
});