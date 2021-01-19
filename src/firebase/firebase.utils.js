import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBJhOtzFv_QhA5igQECBDZA9vUsokOkLRA',
  authDomain: 'crown-database-react.firebaseapp.com',
  projectId: 'crown-database-react',
  storageBucket: 'crown-database-react.appspot.com',
  messagingSenderId: '459917417809',
  appId: '1:459917417809:web:4d128ed0a113c4f5e88770',
  measurementId: 'G-YDWMSFQ1ZJ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if (!snapShop.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(`Error creating user: ${error.message}`);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
