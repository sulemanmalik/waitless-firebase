import React from "react";
import Appointments from "./Appointments";
import {Grid} from "@material-ui/core";

const Dashboard = () => {
  return (
    <Grid xs={4} style={{maxHeight: '100%'}}>
      <Appointments />
    </Grid>
  );
};
export default Dashboard;
