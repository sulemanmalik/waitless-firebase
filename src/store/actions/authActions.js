import firebase from "firebase";
import {Redirect} from 'react-router-dom'

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  // firebase auth service has inputed user info
  // firstore user collections has generated UID and signup info
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword( // create new user:
        newUser.email,
        newUser.password
    ).then((response) => { // create user record for that in firestore:
      // if users collection doesn't exist, firebase creates it for us
      // .doc: reference specific doc ID that has the already generate UID we just created
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0]+ newUser.lastName[0]
      })
    }).then(() =>{ // dispatch action to say signup worked
        dispatch({ type:'SIGNUP_SUCCESS' })
    }).catch( err => {
        dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}