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


  // Firebase Initialisation
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Got a reference to the database service reffered below as: "betterCareer" 
  // whitch will catch the returned objects
  var betterCareerDB = firebase.database().ref('betterCareer');




const db = getDatabase();
        const auth = getAuth(app);
        const dbref = ref(db);

        let User = document.getElementById('username');
        let Email = document.getElementById('email');
        let Password = document.getElementById('pwd');
        let id02 = document.getElementById('reg');


        let SignInUser = evt =>{
          evt.preventDefault();

          signInWithEmailAndPassword(auth, Email.value, Password.value)
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
