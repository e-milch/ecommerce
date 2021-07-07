import firebase from "firebase";

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyNN3KxM5hWwpbUCvIomuFdlaPadUdrVk",
    authDomain: "ecommerce-nology.firebaseapp.com",
    projectId: "ecommerce-nology",
    storageBucket: "ecommerce-nology.appspot.com",
    messagingSenderId: "846664014278",
    appId: "1:846664014278:web:705ccef88a5786ae04bac7"
};

// var firebaseConfig = {
//   apiKey: "AIzaSyCVFA9tG2BiI2V9ZGqJYJSfRONQkv_jda8",
//   authDomain: "woolbarn-8a4ff.firebaseapp.com",
//   projectId: "woolbarn-8a4ff",
//   storageBucket: "woolbarn-8a4ff.appspot.com",
//   messagingSenderId: "342485592434",
//   appId: "1:342485592434:web:904a39c73eb72eb4a8d5eb"
// };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore
export default firebase.firestore();
