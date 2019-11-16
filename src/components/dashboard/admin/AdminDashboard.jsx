import React from "react";
import { Grid, Typography, Button, Card } from "@material-ui/core";
import ClinicTable from "./ClinicTable"
import DoctorTable from './DoctorTable'
import AddDoctorForm from './AddDoctorForm'
import AddClinicForm from './AddClinicForm'
import DeleteClinicForm from './DeleteClinicForm'
import DeleteDoctorForm from "./DeleteDoctorForm";

const AdminDashboard = () => {
  return (
    <Grid direction="row">
        <h1>Managed Clinics</h1>
        <ClinicTable/>
        <br/>
        <AddClinicForm/><DeleteClinicForm/>

        <br/>

        <h1>Doctors</h1>
        <DoctorTable/>
        <br/>
        <AddDoctorForm/><DeleteDoctorForm/>


    </Grid>
  );
};

export default AdminDashboard;
