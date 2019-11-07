import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import firebase from "firebase";
import logo from "../../assets/waitless-logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontWeight: "bold"
  },
  appBar: {
    color: "black",
    backgroundColor: "#00cec9", //'#09e0ce',
    position: "static"
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const { auth, profile } = props;
  const user = firebase.auth().currentUser;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/dashboard">
              <img src={logo} height="35" width="35" />
              <Button color="black">Waitless</Button>
            </Link>
          </Typography>
          {profile.firstName && (
            <Typography variant="h6" className={classes.title}>
              Welcome, {profile.firstName}!
            </Typography>
          )}

          {auth.isLoaded
            ? console.log("user", firebase.auth().currentUser)
            : console.log("not logged")}
          {user ? (
            <Link onClick={props.signOut}>
              <Button color="black">LogOut</Button>
            </Link>
          ) : (
            <div>
              <Link href="/login">
                <Button color="black">Login</Button>
              </Link>

              <Link href="/signup">
                <Button color="black" link>
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
