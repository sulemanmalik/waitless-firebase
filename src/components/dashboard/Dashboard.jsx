import React from "react";
import Appointments from "./Appointments";
import { Grid, Typography } from "@material-ui/core";
import CreateAppointment from "./CreateAppointment";

const Dashboard = () => {
  return (
    <Grid xs={6} style={{ maxHeight: "100%" }}>
      <CreateAppointment />
      <Typography variant="h3">Upcoming Appointments</Typography>
      <Appointments />
    </Grid>
  );
};
export default Dashboard;
