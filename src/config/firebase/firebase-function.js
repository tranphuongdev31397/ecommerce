import { checkFirebaseError } from 'common/functions';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';

import { query, getDocs, collection, where } from 'firebase/firestore';
import UsersServices from 'services/UsersServices';
import { auth, db } from './firebase';

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        //Login with google
        const res = await signInWithPopup(auth, googleProvider);
        //Copy user from gg account
        const user = res.user;
        //Create a query
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        //Find user in db with quey
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            //add  user into db if not found
            user.provider = 'google';
            await UsersServices.addUser(user);
        }
    } catch (err) {
        return err;
    }
};

//Login function
const logInWithEmailAndPassword = async (email, password) => {
    try {
        //auth is auth domain server

        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        let errorCustom = checkFirebaseError(err.message);
        err.message = errorCustom;
        return err;
    }
};

//Register function
const registerWithEmailAndPassword = async (user, successFunction) => {
    const { email, password, ...userInfo } = user;
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = { ...res.user, ...userInfo };
        user.provider = 'local';
        await UsersServices.addUser(user);
        successFunction();
    } catch (err) {
        let errorCustom = checkFirebaseError(err.message);
        err.message = errorCustom;
        return err;
    }
};

//Reset pass with gmail
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent!');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//Sign out function

const logout = () => {
    signOut(auth);
};

export {
    logout,
    sendPasswordReset,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
    signInWithGoogle
};
