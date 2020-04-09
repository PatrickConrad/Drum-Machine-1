
    import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC1S7tSKiCBN0T6WoM9qsEXjhQehV2bwSg",
    authDomain: "music-mixer-15a5f.firebaseapp.com",
    databaseURL: "https://music-mixer-15a5f.firebaseio.com",
    projectId: "music-mixer-15a5f",
    storageBucket: "music-mixer-15a5f.appspot.com",
    messagingSenderId: "143194901400",
    appId: "1:143194901400:web:3757252c373b1dd844f9ed"

  };



   // Initialize Firebase

firebase.initializeApp(firebaseConfig);


export default firebase.database()


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries --> */}


 
