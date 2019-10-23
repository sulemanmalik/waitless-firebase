import authReducer from "./authReducer";
import appointmentsReducer from "./appointmentsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentsReducer,
  firestore: firestoreReducer
});

export default rootReducer;
