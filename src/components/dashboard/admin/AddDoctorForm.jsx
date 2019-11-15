import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";

import { createDoctor } from "../../../store/actions/doctorActions";

const FormDialog = props => {
  const [open, setOpen] = React.useState(false);
  const [doctor, setDoctor] = React.useState({
    doctorName: "",
    specialty: "",
    doctorId: "",
    operatingClinic: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const  handleClose =  async (event) => {
    await submitHandler(event)
    setOpen(false);
  };

  const submitHandler = e => {
    e.preventDefault();
    props.createDoctor(doctor);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add doctor
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Doctor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new doctor to the database, enter the followng information:
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Doctor Name"
            fullWidth
            onChange={e => (doctor.doctorName = e.target.value)}
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Specialty"
            fullWidth
            onChange={e => (doctor.specialty = e.target.value)}
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Doctor ID"
            fullWidth
            onChange={e => (doctor.doctorId = e.target.value)}
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Operating Clinic"
            fullWidth
            onChange={e => (doctor.operatingClinic = e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createDoctor: doctor => dispatch(createDoctor(doctor))
  };
};

export default connect(null, mapDispatchToProps)(FormDialog);
