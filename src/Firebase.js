import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_3i8O9WcOSSPT1gb0x1mZIicNVcGIMFI',
  authDomain: 'linkedin-clone-e6210.firebaseapp.com',
  projectId: 'linkedin-clone-e6210',
  storageBucket: 'linkedin-clone-e6210.appspot.com',
  messagingSenderId: '413745818069',
  appId: '1:413745818069:web:49b6a72efaa09c1a21b55c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
