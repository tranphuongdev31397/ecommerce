import { checkFirebaseError } from 'common/functions';
import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC7qJAEhCG5r18MfytjvnRjeILy6xDxBeA',
    authDomain: 'ecommerce-9ec51.firebaseapp.com',
    projectId: 'ecommerce-9ec51',
    storageBucket: 'ecommerce-9ec51.appspot.com',
    messagingSenderId: '25984385061',
    appId: '1:25984385061:web:6863572a78ba9d9c9c3fcc',
    measurementId: 'G-JMKHT3Z7H1'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

//Check user sign in with google: - Success login : -New user => Save into db
// -Old user ....

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
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
                cart: []
            });
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
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
            cart: []
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
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
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout
};
