import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {initializeApp} from "firebase/app";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCaZ5dVp-rm5hBAGGiX80yxp82PXHkHs_w",
    authDomain: "pawsy-auth-local.firebaseapp.com",
    projectId: "pawsy-auth-local",
    storageBucket: "pawsy-auth-local.appspot.com",
    messagingSenderId: "56926733897",
    appId: "1:56926733897:web:62c3c4a5a38e5a6a9ca198"
}
//Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

export function logOut(){
    return signOut(auth)
}


//Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return unsub

    }, [])

    return currentUser;
}



