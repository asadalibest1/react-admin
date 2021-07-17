import React from "react";
// import Helmet from "react-helmet"
// import "../vendor/js/sb-admin-2.js";
import logo from "../img/logo.png"
// import * as $ from "jquery";
// window.$ = window.jQuery = jQuery;
import { Link, useRouteMatch } from "react-router-dom";

export default function Sidebar() {
  let { url } = useRouteMatch();

  const [sidebartoggle, SetsidebarToggle] = React.useState(false);

  function sidebarToggle() {
    SetsidebarToggle(!sidebartoggle);
  }

  return (
    <div className="px-2">
      {/* <Helmet>
        <script src="../vendor/js/sb-admin-2.min.js"></script>

        </Helmet> */}

      <ul
        className={
          "mynavbar-nav navbar-nav bg-gradient-primary sidebar sidebar-dark " +
          (sidebartoggle ? "toggled" : "") +
          " accordion h-100"
        }
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-icon" style={{ width:"100px", height:"65px" }}>
            {/* <i className="fas fa-laugh-wink"></i> */}
            <img src={logo} className="w-100 h-100" alt="logo"/>
          </div>
          <div className="sidebar-brand-text mx-3">
          Resmantem
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* Dashboard */}
        <li className="nav-item active">
          <Link id="Link" to="/dashboard">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </Link>
        </li>

        {/* Products */}
        <li className="nav-item">
          <Link id="Link" to="/">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Products</span>
            </a>
          </Link>
        </li>

            {/* Orders */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseOrders"
            aria-expanded="true"
            aria-controls="collapseOrders"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Orders</span>
          </a>
          <div
            id="collapseOrders"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>

              <Link id="Link" to={`${url}/all-orders`}>
                <a className="collapse-item" href="">
                All Orders
                </a>
              </Link>

              <Link id="Link" to={`${url}/pending-orders`}>
                <a className="collapse-item" href="">
                Pending Orders
                </a>
              </Link>

              <Link id="Link" to={`${url}/on-process-orders`}>
                <a className="collapse-item" href="">
                On Process Orders
                </a>
              </Link>

              <Link id="Link" to={`${url}/completed-orders`}>
                <a className="collapse-item" href="">
                Completed Orders
                </a>
              </Link>
            </div>
          </div>
        </li>

        {/* Account Management */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseAdmin"
            aria-expanded="true"
            aria-controls="collapseAdmin"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Manage Account</span>
          </a>
          <div
            id="collapseAdmin"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>

              <Link id="Link" to={`${url}/admin`}>
                <a className="collapse-item" href="buttons.html">
                    Admins 
                </a>
              </Link>

              <Link id="Link" to={`${url}/customers`}>
                <a className="collapse-item" href="#">
                  Customers
                </a>
              </Link>
            </div>

          </div>
        </li>

            {/* Reservation */}
            <li className="nav-item">
          <Link id="Link" to={`${url}/reservation`}>
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Reservation</span>
            </a>
          </Link>
        </li>

            {/* Table */}
            <li className="nav-item">
          <Link id="Link" to={`${url}/setting-table`}>
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Table</span>
            </a>
          </Link>
        </li>

            {/* Settings */}
        <li className="nav-item">
          <Link id="Link" to="/">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Settings</span>
            </a>
          </Link>
        </li>

            {/* Mail */}
        <li className="nav-item">
          <Link id="Link" to="/">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Mail</span>
            </a>
          </Link>
        </li>



            {/* Orders */}
            <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseReports"
            aria-expanded="true"
            aria-controls="collapseReports"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Reports</span>
          </a>
          <div
            id="collapseReports"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Reports</h6>

              <Link id="Link" to={`${url}/all-reports`}>
                <a className="collapse-item" href="">
                All Reports
                </a>
              </Link>

              <Link id="Link" to={`${url}/employees-reports`}>
                <a className="collapse-item" href="">
                Employees Reports
                </a>
              </Link>

              <Link id="Link" to={`${url}/deliveries-reports`}>
                <a className="collapse-item" href="">
                Deliveries Reports
                </a>
              </Link>

              <Link id="Link" to={`${url}/errors-reports`}>
                <a className="collapse-item" href="">
                Website Error Reports
                </a>
              </Link>
            </div>
          </div>
        </li>
        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={sidebarToggle}
          ></button>
        </div>
      </ul>
    </div>
  );
}
