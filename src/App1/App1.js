import React from "react";
// import { Helmet } from "react-helmet";

import "../vendor/fontawesome-free/css/all.min.css";
import "../css/fonts_googleapis.css";
import "../css/admin2.css";

import Dashboard from "../Admin/dashboard";
import Sidebar from "../Admin/Sidebar";
import Navbar from "../Admin/Navbar";
import Admins from "../Admin/Management/Admins";
import Customers from "../Admin/Management/Customers";
import AllOrders from "../Admin/Orders/AllOrders";

import { Switch, Route } from "react-router-dom";

export default function App1() {
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

          <Route path="/">
            <Dashboard />
          </Route>


          </Switch>



        </div>
      </div>
    </div>
    </div>
  );
}
