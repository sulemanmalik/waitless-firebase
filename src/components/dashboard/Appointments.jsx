import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import CreateAppointment from "./CreateAppointment";

const Appointments = props => {
  const { appointments } = props
  return (
    <React.Fragment>
      <CreateAppointment />
      <ul>
        {appointments && appointments.map(a => (
          <li>
            {a.title} - {a.time}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    appointments: state.firestore.ordered.appointments || state.appointments.appointments
  };
};

// export default function Appointments() {
//   useFirestoreConnect([
//     { collection: 'appointments' } // or 'todos'
//   ])
//   const appointments = useSelector(state => state.firestore.ordered.appointments)
//  }

// export default compose(firestoreConnect(['appointments']),connect(mapStateToProps))(Appointments) 

export default compose(
  firebaseConnect(() => ['appointments']),
  firestoreConnect(() => ['appointments']),
  connect(mapStateToProps)
)(Appointments);
