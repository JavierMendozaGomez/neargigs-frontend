import React from 'react';
import * as firebase from "firebase/app";
import * as firebaseui from 'firebaseui';


const SignIn = () => {

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_BASE_API_KEY_GOOGLE,
        authDomain: "neargigs.firebaseapp.com",
        databaseURL: "https://neargigs.firebaseio.com",
        projectId: "neargigs",
        storageBucket: "neargigs.appspot.com",
        messagingSenderId: "359385231690",
        appId: "1:359385231690:web:fa296f5c07260c68eb91b3",
        measurementId: "G-S1E539ESH8"
    };
    
    
    // Initialize Firebase
    if(!firebase.apps.length)
        firebase.initializeApp(firebaseConfig);
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ]
    });
    
    return (<div id="firebaseui-auth-container"></div>);
}

export default SignIn;
