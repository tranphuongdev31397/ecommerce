import { db } from 'config/firebase/firebase';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

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
                phoneNumber: user?.phoneNumber || null,
                address: {
                    city: user?.address?.city || null,
                    district: user?.address?.district || null,
                    country: user?.address?.country || null,
                    addressNumber: user?.address?.addressNumber || null
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    getUser = async (id) => {
        const userDoc = await doc(db, 'users', id);
        return getDoc(userDoc);
    };
    updateCart = async (id, cartUpdate) => {
        updateDoc(doc(db, 'users', id), {
            cart: cartUpdate
        });
    };
}

export default new UsersServices();
