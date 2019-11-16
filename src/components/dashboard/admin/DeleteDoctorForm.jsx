import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";

import { deleteDoctor } from "../../../store/actions/doctorActions";
import { compose } from "redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";

const FormDialog = props => {
    const [open, setOpen] = React.useState(false);
    const [doctor] = React.useState({
        doctorId: ""
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
        if(props.doctors){
            props.doctors.forEach((d) => {
                if(d.doctorId === doctor.doctorId){
                    props.deleteDoctor(d);
                }
            });
        }

    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Delete doctor
            </Button>
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Delete Doctor</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To delete an existing doctor from the database, enter the doctor id:
                    </DialogContentText>

                    <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        id="doctorId"
                        label="Doctor ID"
                        fullWidth
                        onChange={e => (doctor.doctorId = e.target.value)}
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
        doctors: state.firestore.ordered.doctors,
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteDoctor: doctor => dispatch(deleteDoctor(doctor))
    };
};

export default compose(
    firebaseConnect(() => ["doctors"]),
    firestoreConnect(() => ["doctors"]),
    connect(mapStateToProps, mapDispatchToProps)
)(FormDialog);