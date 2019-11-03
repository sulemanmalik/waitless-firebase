import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from './components/layout/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Appointments from './components/dashboard/Appointments'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
