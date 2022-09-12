// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzye2GJTG3JHdx9Encs7Q_MHuS1IYPYAk',
  authDomain: 'nextjs-netflix-clone-5f621.firebaseapp.com',
  projectId: 'nextjs-netflix-clone-5f621',
  storageBucket: 'nextjs-netflix-clone-5f621.appspot.com',
  messagingSenderId: '790023851905',
  appId: '1:790023851905:web:38f1e459146c07b951e280',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export { db, auth };
export default app;
