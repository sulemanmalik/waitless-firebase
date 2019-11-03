import React, { useState } from "react";
import { connect } from "react-redux";
import { createAppointment } from "../../store/actions/appointmentActions";
import { Typography } from '@material-ui/core'

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
      <input onChange={e => appointment.title = e.target.value } placeholder="title"></input>
      <input onChange={e => appointment.time = e.target.value} placeholder="time"></input>
      <input onChange={e => appointment.doctor = e.target.value} placeholder="doctor"></input>
      <input onChange={e => appointment.location = e.target.value} placeholder="location"></input>
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
