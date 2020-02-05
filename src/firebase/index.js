import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
    apiKey: "AIzaSyDh751EizIoWWz3g20Tu__TCpKAbhM1JK4",
    authDomain: "e-commerce-db-55a98.firebaseapp.com",
    databaseURL: "https://e-commerce-db-55a98.firebaseio.com",
    projectId: "e-commerce-db-55a98",
    storageBucket: "e-commerce-db-55a98.appspot.com",
    messagingSenderId: "433059231333",
    appId: "1:433059231333:web:94041749beb941ed64b88c",
    measurementId: "G-TPVX22HWYE"
};

firebase.initializeApp(CONFIG);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;