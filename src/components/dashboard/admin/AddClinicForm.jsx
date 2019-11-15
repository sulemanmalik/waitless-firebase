import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";

import { createClinic } from "../../../store/actions/clinicActions";

const FormDialog = props => {
  const [open, setOpen] = React.useState(false);
  const [clinic, setClinic] = React.useState({
    clinicName: "",
    numDoctors: "",
    clinicId: ""
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
    props.createClinic(clinic);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add clinic
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Clinic</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new clinic to the database, enter the followng information:
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Clinic Name"
            fullWidth
            onChange={e => (clinic.clinicName = e.target.value)}
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Number of doctors"
            fullWidth
            onChange={e => (clinic.numDoctors = e.target.value)}
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Clinic ID"
            fullWidth
            onChange={e => (clinic.clinicId = e.target.value)}
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
    createClinic: clinic => dispatch(createClinic(clinic))
  };
};

export default connect(null, mapDispatchToProps)(FormDialog);
