// The web app betterCareer Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp-FYM-77QwCtFEYA5yQCUpHMSTl6oJWc",
    authDomain: "bettercareer-27033.firebaseapp.com",
    databaseURL: "https://bettercareer-27033-default-rtdb.firebaseio.com",
    projectId: "bettercareer-27033",
    storageBucket: "bettercareer-27033.appspot.com",
    messagingSenderId: "898798821793",
    appId: "1:898798821793:web:2d6b543a871403d3376be0",
    measurementId: "G-3YBVGWX48B"
  };

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";


  // Firebase Initialisation
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Imported the functions needed from the SDKs

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

  import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


  firebase.initializeApp(firebaseConfig);

  // Got a reference to the database service reffered below as: "betterCareer" 
  // whitch will catch the returned objects
  var betterCareerDB = firebase.database().ref('betterCareer');




  
// Add an event listener to the registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="psw"]').value;
    const passwordRepeat = document.querySelector('input[name="psw-repeat"]').value;

   
    // Create a new user account with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;
            console.log('User registered:', user);

            
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorMessage);
            // Display error message to the user
            alert(errorMessage);
        });
});
