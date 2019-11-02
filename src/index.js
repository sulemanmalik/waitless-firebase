import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirestore, createFirestoreInstance, reduxFirestore  } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import createReduxStore from './store/createReduxStore'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

import firebaseConfig from "./config/firebase";

const config = {
  apiKey: "AIzaSyAxnNUY_8BzkaHOdNDNKdjjf6sqnDBjBdE",
  authDomain: "waitless-fe542.firebaseapp.com",
  databaseURL: "https://waitless-fe542.firebaseio.com",
  projectId: "waitless-fe542",
  storageBucket: "waitless-fe542.appspot.com",
  messagingSenderId: "534915193684",
  appId: "1:534915193684:web:97f514a83a1516a84406c1",
  measurementId: "G-B262QCEK0D"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true })

firebase.firestore()

const createStoreWithFirebase = compose(
  reduxFirestore(firebase), 
)(createStore)



// const store = createReduxStore()


const store = createStoreWithFirebase(
  rootReducer,
  compose(
    // reduxFirestore(firebase),
    // reactReduxFirebase(config),
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),

  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./store/reducers/rootReducer";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase } from "react-redux-firebase";
// import * as firebase from "firebase";
// import "firebase/firestore";
// import firebaseConfig from "./config/firebase";

// // react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users'
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }


// // firebase.initializeApp(firebaseConfig);
// firebase.firestore();



// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebaseConfig)
//   )
//   // compose(
//   //   applyMiddleware(...middlewares),
//   //   reduxFirestore(firebase, firebaseConfig),
//   //   reactReduxFirebase(firebase)
//   // )
// );

// const rrfProps = {
//   firebase,
//   config: firebaseConfig,
//   dispatch: store.dispatch
// };

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById("root")
// );
