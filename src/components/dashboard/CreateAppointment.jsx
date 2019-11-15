import React, { useState } from "react";
import { connect } from "react-redux";
import { createAppointment } from "../../store/actions/appointmentActions";
import { Typography, Paper, TextField } from '@material-ui/core'

const CreateAppointment = props => {
  const [appointment] = useState({title: '', time: ''})

  const submitHandler = e => {
    e.preventDefault();
    console.log(appointment)
    props.createAppointment(appointment);
  };
  return (
    <div>

        <Typography variant="h3" gutterBottom>Create appointment</Typography>
        <TextField variant="outlined" onChange={e => appointment.title = e.target.value } placeholder="title"></TextField>
        <TextField variant="outlined" onChange={e => appointment.time = e.target.value} placeholder="time"></TextField>
        <TextField variant="outlined" onChange={e => appointment.doctor = e.target.value} placeholder="doctor"></TextField>
        <TextField variant="outlined" onChange={e => appointment.location = e.target.value} placeholder="location"></TextField>
        <button onClick={submitHandler}>Submit</button>


    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createAppointment: appointment => dispatch(createAppointment(appointment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateAppointment);
