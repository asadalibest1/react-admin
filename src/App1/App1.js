import React from "react";
// import { Helmet } from "react-helmet";

import "../vendor/fontawesome-free/css/all.min.css";
import "../css/fonts.css";
import "../css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

import PrivateRoute from "../Admin/PrivateRoute/PrivateRoute";
import Login from "../Admin/Login/Login";
import Register from "../Admin/Register/Register";
import ForgotPassword from "../Admin/ForgotPassword/ForgotPassword";


import Dashboard from "../Admin/dashboard";
import Sidebar from "../Admin/Sidebar";
import Navbar from "../Admin/Navbar";
import Admins from "../Admin/Management/Admins";
import Customers from "../Admin/Management/Customers";
import AllOrders from "../Admin/Orders/AllOrders";

import CompletedOrders from "../Admin/Orders/CompletedOrders";
import OnProcessOrders from "../Admin/Orders/OnProcessOrders";
import PendingOrders from "../Admin/Orders/PendingOrders";
import Table from "../Admin/Table/Table";
import Reservation from "../Admin/Reservation/Reservation";

import AllReports from "../Admin/Reports/All";
import Delivery from "../Admin/Reports/Delivery";
import Employee from "../Admin/Reports/Employee";
import WebsiteErr from "../Admin/Reports/WebsiteErr";


function Rout() {
  return (

    <div className="row">

        <div id="wrapper" style={{ width: "100%"}}>

      <Sidebar />

      <div id="content-wrapper">
        <div id="content">
          <Navbar />

          <Switch>
          <Route path="/admin">
            <Admins />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>

          <Route path="/all-orders">
            <AllOrders />
          </Route>

          <Route path="/completed-orders">
            <CompletedOrders />
          </Route>

          <Route path="/on-process-orders">
            <OnProcessOrders />
          </Route>

          <Route path="/pending-orders">
            <PendingOrders />
          </Route>

          <Route path="/setting-table">
            <Table />
          </Route>

          <Route path="/reservation">
            <Reservation />
          </Route>

          {/* Reports */}
          <Route path="/all-reports">
            <AllReports />
          </Route>

          <Route path="/employees-reports">
            <Employee />
          </Route>
          
          <Route path="/deliveries-reports">
            <Delivery />
          </Route>
          
          <Route path="/errors-reports">
            <WebsiteErr/>
          </Route>

          {/* <Route path="/"> */}
            <Dashboard />
          {/* </Route> */}

          </Switch>

        </div>
      </div>
    </div>
    </div>
  );
}


export default function App1() {
  return (
    <div>
      
      <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Rout} />
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>


    </div>
  )
}

