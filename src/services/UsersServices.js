import { db } from 'config/firebase/firebase';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
    getDocFromServer,
    getDoc
} from 'firebase/firestore';

const userCollectionRef = collection(db, 'users');
console.log(userCollectionRef);
console.log(db);
class UsersServices {
    getUser = async (uid) => {
        const q = query(collection(db, 'users'), where('uid', '==', `${uid}`));
        //Find user in db with quey
        const docs = await getDocs(q);

        if (docs.docs.length !== 0) {
            return docs.docs[0].data();
        }
    };
}

export default new UsersServices();
