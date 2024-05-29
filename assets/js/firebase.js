  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfAqYekSDIXNlSP2H2gH5dPud3CfGuDTk",
    authDomain: "beernest-a2b23.firebaseapp.com",
    projectId: "beernest-a2b23",
    storageBucket: "beernest-a2b23.appspot.com",
    messagingSenderId: "916783131120",
    appId: "1:916783131120:web:7f45a54e544e64ebe21535",
    measurementId: "G-HJQ53EBZMS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);