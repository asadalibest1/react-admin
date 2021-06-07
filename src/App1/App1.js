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
import { Switch, Route } from "react-router-dom";

export default function App1() {
  return (

    <div className="row">

        <div id="wrapper">

      <Sidebar />

      <div id="content-wrapper" className="">
        <div id="content">
          <Navbar />

          <Switch>
          <Route path="/admin">
            <Admins />
          </Route>
          <Route path="/customers">
            <Customers />
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
