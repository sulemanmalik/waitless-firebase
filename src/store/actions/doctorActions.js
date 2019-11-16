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

export const deleteDoctor = doctor => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async calls

        const firestore = getFirestore();
        firestore
            .collection("doctors")
            .doc(doctor.id)
            .delete()
            .then(() => {
                //dispatch action
                dispatch({ type: "DELETE_DOCTOR", doctor: doctor });
            }).catch(err => {
            dispatch({ type: 'DELETE_DOCTOR_ERR', err})
        });


    };
};
  