import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

// import PrivateRoute from "../Admin/PrivateRoute/PrivateRoute";
// import Login from "../Admin/Login/Login";
// import Register from "../Admin/Register/Register";
// import ForgotPassword from "../Admin/ForgotPassword/ForgotPassword";


import Dashboard from "../dashboard";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Admins from "../Management/Admins";
import Customers from "../Management/Customers";
import AllOrders from "../Orders/AllOrders";

import CompletedOrders from "../Orders/CompletedOrders";
import OnProcessOrders from "../Orders/OnProcessOrders";
import PendingOrders from "../Orders/PendingOrders";
import Table from "../Table/Table";
import Reservation from "../Reservation/Reservation";

import AllReports from "../Reports/All";
import Delivery from "../Reports/Delivery";
import Employee from "../Reports/Employee";
import WebsiteErr from "../Reports/WebsiteErr";


export default function Rout() {
  var { path, url } = useRouteMatch();

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Redirect to="/login" />
  }

  return (

    <div className="row">
    <div id="page-top" style={{width: '100%'}}>

      <div id="wrapper" style={{ width: "100%" }}>

        <Sidebar />

        <div id="content-wrapper">
          <div id="content">
            <Navbar />

            <Switch>
              <Route path={`${url}/admin`}>
                <Admins />
              </Route>

              <Route path={`${url}/customers`}>
                <Customers />
              </Route>

              <Route path={`${url}/all-orders`}>
                <AllOrders />
              </Route>

              <Route path={`${url}/completed-orders`}>
                <CompletedOrders />
              </Route>

              <Route path={`${url}/on-process-orders`}>
                <OnProcessOrders />
              </Route>

              <Route path={`${url}/pending-orders`}>
                <PendingOrders />
              </Route>

              <Route path={`${url}/setting-table`}>
                <Table />
              </Route>

              <Route path={`${url}/reservation`}>
                <Reservation />
              </Route>

              {/* Reports */}
              <Route path={`${url}/all-reports`}>
                <AllReports />
              </Route>

              <Route path={`${url}/employees-reports`}>
                <Employee />
              </Route>

              <Route path={`${url}/deliveries-reports`}>
                <Delivery />
              </Route>

              <Route path={`${url}/errors-reports`}>
                <WebsiteErr />
              </Route>

              <Route path={url}>
                <Dashboard />
              </Route>

            </Switch>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}