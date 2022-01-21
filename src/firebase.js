import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7kHsXlRyUvQCJdqXFYp8PJx-QeFu2abY",
  authDomain: "clone-c6471.firebaseapp.com",
  projectId: "clone-c6471",
  storageBucket: "clone-c6471.appspot.com",
  messagingSenderId: "177260187771",
  appId: "1:177260187771:web:6a9873a497c5f3d9aa92de"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};