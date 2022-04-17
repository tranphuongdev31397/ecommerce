import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

//Check user sign in with google: - Success login : -New user => Save into db
// -Old user ....

export { auth, db };
