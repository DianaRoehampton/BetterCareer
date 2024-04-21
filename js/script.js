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



// Function to close the modal
function closeModal() {
    document.getElementById('id02').style.display = 'none';
}
// Function to handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

 // Get user input
        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let psw = document.getElementById('pwd');
        let id02 = document.getElementById('reg');
        let scope = document.getElementById('scope');
        let age = document.getElementById('age');



        let SignInUser = evt =>{
          evt.preventDefault();

          signInWithEmailAndPassword(auth, email.value, Password.value)
          .then((credentials)=>{
              get(child(dbref, '/UserAuthList' + credentials.user.uid)).then((snaphot)=>{
                  if(snapshot.exists){
                      sessionStorage.setItem("user-info", JSON.stringify({
                          name: snapshot.val().name
                      }))
                      sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                      window.location.href ='home.html'
                  }
              })
          })
          .catch((error)=>{
              alert(error.message);
              console.log(error.code);
              console.log(error.message);
          })
}

      Form.addEventListener('submit', SignInUser);
})


// Get the modal for Log in
var modallog = document.getElementById('id01'); 
// Get the modal for registration
var modalreg = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modallog) {
        modallog.style.display = "none";
    }
}
                
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalreg) {
        modalreg.style.display = "none";
    }
}
