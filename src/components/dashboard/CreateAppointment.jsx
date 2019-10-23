import React, { useState } from "react";
import { connect } from "react-redux";
import { createAppointment } from "../../store/actions/appointmentActions";

const CreateAppointment = props => {
  const [appointment] = useState({title: '', time: ''})

  const submitHandler = e => {
    e.preventDefault();
    console.log(appointment)
    props.createAppointment(appointment);
  };
  return (
    <div>
      <h1>Create appointment</h1>
      <input onChange={e => appointment.title = e.target.value }></input>
      <input onChange={e => appointment.time = e.target.value}></input>
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
