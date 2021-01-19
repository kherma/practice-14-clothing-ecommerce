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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
