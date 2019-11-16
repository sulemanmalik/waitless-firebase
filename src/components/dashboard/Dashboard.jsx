import React from "react";
import Appointments from "./Appointments";
import { Grid, Typography, Button } from "@material-ui/core";
import CreateAppointment from "./CreateAppointment";
import { connect } from "react-redux";
import firebase from "firebase";
import Drawer from "./Drawer";
import AddDoctorForm from "./admin/AddDoctorForm";

import functions from "../../index";

import "./Dashboard.scss";
import AdminDashboard from "./admin/AdminDashboard";

const Dashboard = () => {
  const user =
    firebase
        .auth()
        .currentUser.getIdTokenResult(true)
        .then(idTokenResult => {
          if (idTokenResult.claims.admin) {
            console.log("admin!!!");
          } else {
            console.log("not admin!!!");
          }
        })
        .catch(err => {
          return err;
        });

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      direction="column"
      style={{ maxHeight: "100%", marginTop: "150px", paddingLeft: "200px", marginBottom: "50px" }}
    >
      <Drawer />

      <AdminDashboard />

    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    appointments: state.firestore.ordered.appointments,
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Dashboard);
