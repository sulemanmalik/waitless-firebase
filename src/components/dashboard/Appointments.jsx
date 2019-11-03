import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import CreateAppointment from "./CreateAppointment";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 40,
    borderRadius: 9,
    padding: 50,
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 0 11px rgba(33,33,33,.2);"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  point: {
    listStyle: "none"
  }
});
const Appointments = props => {
  const classes = useStyles();
  const { appointments } = props;
  return (
    <React.Fragment>
      <CreateAppointment />
      {appointments &&
        appointments.map(a => (
          <Card className={classes.card} style={{ backgroundColor: "yellow"}} key={a.title}>
              <Grid container direction="row" justify="flex-start" style={{ backgroundColor: "grey" }}>
                <Typography variant="h5">{a.title}</Typography>
              </Grid>
          </Card>
        ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    appointments: state.firestore.ordered.appointments
  };
};

export default compose(
  firebaseConnect(() => ["appointments"]),
  firestoreConnect(() => ["appointments"]),
  connect(mapStateToProps)
)(Appointments);
