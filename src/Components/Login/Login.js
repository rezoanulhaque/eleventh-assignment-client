import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import logo from '../../logos/logo.png';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        error:'',
        success:false
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        })
        .catch(err => {
          console.log(err.message);
        })

    }
    return (
        <div className="login">
            <div>
                <img className="loginimg" src={logo} width="200" height="30" alt="" />
            </div>
            <div className="loginbutton">
                <h3>Login with</h3>
                <button onClick={handleSignIn}>continue with Google</button>
            </div>
        </div>
    );
};

export default Login;