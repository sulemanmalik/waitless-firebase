import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import indigo from "@material-ui/core/colors/indigo";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 750,
  },
  header: {
    background: indigo[100],
  },
  headerText: {
    fontWeight: 'bold',
  }
});

function createData(doctorName, specialty, doctorId, operatingClinic) {
  return { doctorName, specialty, doctorId, operatingClinic};
}

const rows = [
  createData('Dr. Doc Ock', 'Surgery', 'A89JH829', 'Montreal Medical Center')
];

const DoctorTable = (props) => { 
  const classes = useStyles();
  const {doctors} = props

  console.log('docs', props)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell className={classes.headerText}>Doctor name</TableCell>
            <TableCell className={classes.headerText} align="left">Specialty</TableCell>
            <TableCell className={classes.headerText} align="left">Doctor ID</TableCell>
            <TableCell className={classes.headerText} align="right">Operating clinic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.doctors && props.doctors.map(doc => (
            <TableRow key={doc.doctorId}>
              <TableCell component="th" scope="row">
                {doc.doctorName}
              </TableCell>
              <TableCell align="left">{doc.specialty}</TableCell>
              <TableCell align="left">{doc.doctorId}</TableCell>
              <TableCell align="right">{doc.operatingClinic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    doctors: state.firestore.ordered.doctors,
    auth: state.firebase.auth
  };
};

export default compose(
  firebaseConnect(() => ["doctors"]),
  firestoreConnect(() => ["doctors"]),
  connect(mapStateToProps)
)(DoctorTable);