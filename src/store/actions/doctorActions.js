export const createDoctor = doctor => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //make async calls
  
      const firestore = getFirestore();
      firestore
        .collection("doctors")
        .add({
          ...doctor
        })
        .then(() => {
          //dispatch action
          dispatch({ type: "CREATE_DOCTOR", doctor: doctor });
        }).catch(err => {
          dispatch({ type: 'CREATE_DOCTOR_ERR', err})
        })
    };
  };
  