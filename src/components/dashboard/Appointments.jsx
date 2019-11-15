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
  Grid,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import firebase from "firebase";

const useStyles = makeStyles({
  card: {
    maxWidth: 420,
    height: 300,
    margin: 40,
    borderRadius: 9,
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 0 11px rgba(33,33,33,.2);"
    },
    display: "flex",
    direction: "column",
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

const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 50
      }}
  />
);

const Appointments = props => {
  const classes = useStyles();
  const { appointments, auth } = props;

  return (
    <React.Fragment>
      {appointments &&
        appointments.map(a => (
          <Card
            className={classes.card}
            key={a.title}
          >
            <Grid container direction="column" alignItems="center" justify="space-around" >
              <Typography variant="h5" style={{padding:7}}>
                {a.title}
              </Typography>
              <Typography variant="h6" style={{color:'grey'}}>{a.doctor}</Typography>

                <Divider style={{width: 300}}/>
              <Typography variant="h6" style={{color:"grey"}}>{a.location}</Typography>
              <Typography variant="h6">{a.time}</Typography>
            </Grid>
          </Card>
        ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    appointments: state.firestore.ordered.appointments,
    auth: state.firebase.auth
  };
};

export default compose(
  firebaseConnect(() => ["appointments"]),
  firestoreConnect(() => ["appointments"]),
  connect(mapStateToProps)
)(Appointments);

// export default compose(
//   firebaseConnect(() => ["appointments"]),
//   firestoreConnect(props => [
//     {
//       collection: 'appointments',
//       where: [['user.uid', '==', props.auth.uid]],
//     }

//   ]),
//   connect(mapStateToProps)
// )(Appointments);
