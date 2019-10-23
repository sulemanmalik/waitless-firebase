import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "firebase";
import "firebase/firestore";

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
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
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

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebaseConfig)
//   )
// );

// const rrfProps = {
//   firebase,
//   config: firebaseConfig,
//   dispatch: store.dispatch
// };

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
