import { db } from 'config/firebase/firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

const userCollectionRef = collection(db, 'users');
class UsersServices {
    addUser = async (user) => {
        try {
            setDoc(doc(db, 'users', user.uid.toString()), {
                uid: user.uid,
                name: user.displayName || user.name,
                authProvider: user.provider,
                email: user.email,
                cart: [],
                phoneNumber: null,
                address: {
                    city: null,
                    district: null,
                    country: null,
                    addressNumber: null
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    getUser = (id) => {
        const userDoc = doc(db, 'users', id);
        return getDoc(userDoc);
    };
}

export default new UsersServices();
