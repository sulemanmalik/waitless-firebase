import React, { Component } from 'react';
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
import {red} from "@material-ui/core/colors";

// const useStyles = makeStyles(theme => ({
//     "@global": {
//         body: {
//             backgroundColor: theme.palette.common.white
//         }
//     },
//     paper: {
//         marginTop: "18vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main
//     },
//     form: {
//         width: "100%",
//         marginTop: theme.spacing(1)
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//         backgroundColor: "#27ae60",
//         "&:hover": {
//             backgroundColor: "#27ae60"
//         },
//         color: "white"
//     }
// }));

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        // this.state = newUser which we send to mapDispatchToProps
    };
    useStyles = makeStyles(theme => ({
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

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/dashboard'/>
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.useStyles.paper}>
                    <Avatar className={this.useStyles.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={this.useStyles.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="firstName"
                            label="First Name"
                            type="firstName"
                            id="firstName"
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="lastName"
                            id="lastName"
                            onChange={this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={this.useStyles.submit}
                            onClick={this.handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <div className={this.useStyles.error} color="red">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </form>
                </div>
            </Container>

        )
    }

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