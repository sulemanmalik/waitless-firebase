import authReducer from "./authReducer";
import appointmentsReducer from "./appointmentsReducer";
import doctorsReducer from "./doctorsReducer";
import clinicsReducer from './clinicsReducer'
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentsReducer,
  doctors: doctorsReducer,
  clinics: clinicsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
