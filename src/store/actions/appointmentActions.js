export const createAppointment = appointment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async calls
    const firestore = getFirestore();
    firestore
      .collection("appointments")
      .add({
        ...appointment
      })
      .then(() => {
        //dispatch action
        dispatch({ type: "CREATE_APPOINTMENT", appointment: appointment });
      }).catch(err => {
        dispatch({ type: 'CREATE_APPOINTMENT_ERR', err})
      })
  };
};
