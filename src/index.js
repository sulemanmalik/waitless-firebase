import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase } from "react-redux-firebase";
import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./config/firebase";

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


// firebase.initializeApp(firebaseConfig);
firebase.firestore();



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig)
  )
  // compose(
  //   applyMiddleware(...middlewares),
  //   reduxFirestore(firebase, firebaseConfig),
  //   reactReduxFirebase(firebase)
  // )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
