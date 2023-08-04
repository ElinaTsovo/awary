import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import admin from 'firebase-admin'
import { service } from './service';

const firebaseConfig = {
    apiKey: "AIzaSyArw_PUMFpElMDIhjmmf596Dz25A8sf1qE",
    authDomain: "awaryapi.firebaseapp.com",
    projectId: "awaryapi",
    storageBucket: "awaryapi.appspot.com",
    messagingSenderId: "426165786662",
    appId: "1:426165786662:web:46349bc617b675c3b9eee7",
    measurementId: "G-K1V1HDMJYP"
  };


  admin.initializeApp({
    credential: admin.credential.cert(service)
  });

  const app = firebase.initializeApp(firebaseConfig)
  const admin_auth = admin.auth()

  export {app, admin_auth}