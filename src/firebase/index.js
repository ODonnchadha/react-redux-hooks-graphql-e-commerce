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

/*
* This code simply creates the snapshot data.
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.warn('Error creating user: ', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;