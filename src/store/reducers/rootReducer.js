import authReducer from "./authReducer";
import appointmentsReducer from "./appointmentsReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
