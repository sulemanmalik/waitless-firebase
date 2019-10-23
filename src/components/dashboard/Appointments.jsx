import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import CreateAppointment from "./CreateAppointment";

const Appointments = props => {
  console.log(props);
  return (
    <React.Fragment>
      <ul>
        {props.appointments.map(a => (
          <li>
            {a.title} - {a.time}
          </li>
        ))}
      </ul>
      <CreateAppointment />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  console.log("State -- ", state.firestore.ordered);
  return {
    appointments: state.appointments.appointments
  };
};

export default compose(
  firebaseConnect(),
  firestoreConnect(['appointments']),
  connect(mapStateToProps)
)(Appointments);
