import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCaZ5dVp-rm5hBAGGiX80yxp82PXHkHs_w",
    authDomain: "pawsy-auth-local.firebaseapp.com",
    projectId: "pawsy-auth-local",
    storageBucket: "pawsy-auth-local.appspot.com",
    messagingSenderId: "56926733897",
    appId: "1:56926733897:web:62c3c4a5a38e5a6a9ca198"
};

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const auth = firebaseApp.auth();
export default auth