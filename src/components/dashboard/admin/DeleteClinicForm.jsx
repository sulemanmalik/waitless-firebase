import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";

import { deleteClinic } from "../../../store/actions/clinicActions";
import { compose } from "redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";

const FormDialog = props => {
    const [open, setOpen] = React.useState(false);
    const [clinic] = React.useState({
        clinicId: ""
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const  handleConfirm =  async (event) => {
        await submitHandler(event)
        setOpen(false);
    };

    const handleCancel = async () => {
        setOpen(false);
    };

    const submitHandler = e => {
        e.preventDefault();
        if(props.clinics){
            props.clinics.forEach((c) => {
                if(c.clinicId === clinic.clinicId){
                    props.deleteClinic(c);
                }
            });
        }

    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Delete clinic
            </Button>
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Delete Clinic</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To delete an existing clinic from the database, enter the clinic id:
                    </DialogContentText>

                    <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        id="clinicId"
                        label="Clinic ID"
                        fullWidth
                        onChange={e => (clinic.clinicId = e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Delete
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        clinics: state.firestore.ordered.clinics,
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteClinic: clinic => dispatch(deleteClinic(clinic))
    };
};

export default compose(
    firebaseConnect(() => ["clinics"]),
    firestoreConnect(() => ["clinics"]),
    connect(mapStateToProps, mapDispatchToProps)
)(FormDialog);