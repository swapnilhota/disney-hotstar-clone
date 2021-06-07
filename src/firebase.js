import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqJoGbEBA8E9M_bUR0l8pHksRiaVxyEgk",
    authDomain: "disney-hotstar-clone-aab50.firebaseapp.com",
    projectId: "disney-hotstar-clone-aab50",
    storageBucket: "disney-hotstar-clone-aab50.appspot.com",
    messagingSenderId: "1010809083844",
    appId: "1:1010809083844:web:77935b156fd7438e523691",
    measurementId: "G-15NH8JTR0K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;