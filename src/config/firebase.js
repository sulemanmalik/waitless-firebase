import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAxnNUY_8BzkaHOdNDNKdjjf6sqnDBjBdE",
    authDomain: "waitless-fe542.firebaseapp.com",
    databaseURL: "https://waitless-fe542.firebaseio.com",
    projectId: "waitless-fe542",
    storageBucket: "waitless-fe542.appspot.com",
    messagingSenderId: "534915193684",
    appId: "1:534915193684:web:97f514a83a1516a84406c1",
    measurementId: "G-B262QCEK0D"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
