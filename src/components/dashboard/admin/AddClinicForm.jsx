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
  const [clinic] = React.useState({
    clinicName: "",
    numDoctors: "",
    clinicId: ""
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const  handleConfirm =  async (event) => {
    if(clinic.clinicName!=="" && clinic.clinicId!=="" && clinic.numDoctors!==""){
      await submitHandler(event);
      setOpen(false);
    }
    else{
      const error = "Add Clinic Error: cannot have an empty field";
      console.log(error);
    }
  };

  const handleCancel = async () => {
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
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Clinic</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new clinic to the database, enter the following information:
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
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
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
