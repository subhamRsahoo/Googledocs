import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8rs8dD6NsP4wSt5QvoEvh-_JmS6cY4nI",
    authDomain: "docs-a86a4.firebaseapp.com",
    projectId: "docs-a86a4",
    storageBucket: "docs-a86a4.appspot.com",
    messagingSenderId: "1038381005033",
    appId: "1:1038381005033:web:a22dd6faf8e45414eed878"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;