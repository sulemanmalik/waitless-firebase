import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirestore, createFirestoreInstance } from "redux-firestore";
import {
  reduxFirestore,
  ReactReduxFirebaseProvider,
  getFirebase,
  reactReduxFirebase
} from "react-redux-firebase";
import firebase from "firebase";
import "firebase/firestore";

const initialState = {};

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



export default () => {

    return createStore(
      reducer,
      initialState,
      compose (
        // reduxFirestore(firebase),

      //   reduxFirestore(config),
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      )
    );
};
