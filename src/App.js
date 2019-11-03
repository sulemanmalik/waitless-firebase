import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp.jsx";
import Appointments from "./components/dashboard/Appointments";
import Dashboard from "./components/dashboard/Dashboard";
import firebase from "firebase";
import {connect} from 'react-redux'

function App(props) {
  const {auth} = props
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
          {/* {!auth.uid && (<Redirect to="/dashboard"/>)} */}

          {auth.uid && <Route path="/dashboard" component={Dashboard} />}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
