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

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 1350,
  },
});

function createData(clinicName, numDoctors, clinicId) {
  return { clinicName, numDoctors, clinicId,};
}

const rows = [
  createData('Montreal medical center', '43', '23719329')
];

const ClinicTable = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Clinic name</TableCell>
            <TableCell align="right">Doctors</TableCell>
            <TableCell align="right">Clinic ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.clinics && props.clinics.map(clinic => (
            <TableRow key={clinic.clinicId}>
              <TableCell component="th" scope="row">
                {clinic.clinicName}
              </TableCell>
              <TableCell align="right">{clinic.numDoctors}</TableCell>
              <TableCell align="right">{clinic.clinicId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}


const mapStateToProps = state => {
    return {
      clinics: state.firestore.ordered.clinics,
      auth: state.firebase.auth
    };
  };
  
  export default compose(
    firebaseConnect(() => ["clinics"]),
    firestoreConnect(() => ["clinics"]),
    connect(mapStateToProps)
  )(ClinicTable);