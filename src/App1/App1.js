import React from "react";

import "../vendor/fontawesome-free/css/all.min.css";
import "../css/fonts.css";
import "../css/style.css";
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useLocation, useParams } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

import PrivateRoute from "../Admin/PrivateRoute/PrivateRoute";
import Login from "../Admin/Login/Login";
import Register from "../Admin/Register/Register";
import ForgotPassword from "../Admin/ForgotPassword/ForgotPassword";

import UpdateAccount from "../Admin/UpdateAccount/UpdateAccount";


import Rout from "../Admin/Panel/Panel"

// import privateRoute from "../Admin/PrivateRoute/IrivateRoute"


export default function App1() {
  let { path, url } = useRouteMatch();
  const location = useLocation();

  // const currentUser = true

  // const { currentUser } = useAuth()

  // const currentUser = true;

  return (
    <div>

      <Router>
        <AuthProvider>
          <Switch>

          <Route path="/update-account" component={UpdateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/register" component={Register} />
          <Route path='/login' component={Login} />
          <Route path="/dashboard" component={Rout} />

            <PrivateRoute exact path={location.pathname} />


            {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}

          </Switch>
        </AuthProvider>
      </Router>


    </div>
  )
}