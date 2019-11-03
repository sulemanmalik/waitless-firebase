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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "grey",
    position: "static"
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const { auth } = props;
  const user = firebase.auth().currentUser;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/dashboard">
                <Button color="inherit">Waitless</Button>
              </Link>
          </Typography>

          {auth.isLoaded
            ? console.log("user", firebase.auth().currentUser)
            : console.log("not logged")}
          {user ? (
            <Link onClick={props.signOut}>
              <Button color="inherit">LogOut</Button>
            </Link>
          ) : (
            <div>
              <Link href="/login">
                <Button color="inherit">Login</Button>
              </Link>

              <Button color="inherit" link>
                Signup
              </Button>
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
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
