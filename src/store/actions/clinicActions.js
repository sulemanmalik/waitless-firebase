export const createClinic = clinic => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //make async calls
  
      const firestore = getFirestore();
      firestore
        .collection("clinics")
        .add({
          ...clinic
        })
        .then(() => {
          //dispatch action
          dispatch({ type: "CREATE_CLINIC", clinic: clinic });
        }).catch(err => {
          dispatch({ type: 'CREATE_CLINIC_ERR', err})
        });


    };
  };

export const deleteClinic = clinic => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async calls

        const firestore = getFirestore();
        firestore
            .collection("clinics")
            .doc(clinic.id)
            .delete()
            .then(() => {
                //dispatch action
                dispatch({ type: "DELETE_CLINIC", clinic: clinic });
            }).catch(err => {
            dispatch({ type: 'DELETE_CLINIC_ERR', err})
        });


    };
};
