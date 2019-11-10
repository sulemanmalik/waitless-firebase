import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: "18vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#27ae60",
        "&:hover": {
            backgroundColor: "#27ae60"
        },
        color: "white"
    },
    error: {
        color: "red",
    }
}));

const SignUp = props => {
    const classes = useStyles();

    const state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        sex: '',
        medicareNumber: '',
        phoneNumber: '',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(state);
        // state = newUser which we send to mapDispatchToProps
    };
    const {auth, authError} = props;
    if (auth.uid) return <Redirect to='/dashboard'/>

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={e => state.email = e.target.value}
                            /></Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => state.password = e.target.value}
                            /></Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="firstName"
                                label="First Name"
                                type="firstName"
                                id="firstName"
                                onChange={e => state.firstName = e.target.value}
                            /></Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="lastName"
                                label="Last Name"
                                type="lastName"
                                id="lastName"
                                onChange={e => state.lastName = e.target.value}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="dateOfBirth"
                                label="Date of Birth (dd/mm/yyyy)"
                                type="dateOfBirth"
                                id="dateOfBirth"
                                onChange={e => state.dateOfBirth = e.target.value}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="sex"
                                label="Sex"
                                type="sex"
                                id="sex"
                                onChange={e => state.sex = e.target.value}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="medicareNumber"
                                label="Medicare Number"
                                type="medicareNumber"
                                id="medicareNumber"
                                onChange={e => state.medicareNumber = e.target.value}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="phoneNumber"
                                label="Phone Number"
                                type="phoneNumber"
                                id="phoneNumber"
                                onChange={e => state.phoneNumber = e.target.value}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <div style={{color: 'red'}}>
                        { authError ? <p>{authError}</p>: null }
                    </div>
                </form>
            </div>
        </Container>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)