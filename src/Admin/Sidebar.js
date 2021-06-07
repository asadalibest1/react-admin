import React from "react";
// import Helmet from "react-helmet"
// import "../vendor/js/sb-admin-2.js";

// import * as $ from "jquery";
// window.$ = window.jQuery = jQuery;
import { Link } from "react-router-dom";

export default function Sidebar() {
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
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* Dashboard */}
        <li className="nav-item active">
          <Link id="Link" to="/">
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

              <Link id="Link" to="/">
                <a className="collapse-item" href="buttons.html">
                All Orders
                </a>
              </Link>

              <Link id="Link" to="/">
                <a className="collapse-item" href="buttons.html">
                Pending Orders
                </a>
              </Link>

              <Link id="Link" to="/">
                <a className="collapse-item" href="buttons.html">
                On Process Orders
                </a>
              </Link>

              <Link id="Link" to="/">
                <a className="collapse-item" href="buttons.html">
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

              <Link id="Link" to="/admin">
                <a className="collapse-item" href="buttons.html">
                    Admins 
                </a>
              </Link>

              <Link id="Link" to="/customers">
                <a className="collapse-item" href="#">
                  Customers
                </a>
              </Link>
            </div>
            
          </div>
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

            {/* Report */}
        <li className="nav-item">
          <Link id="Link" to="/">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Report</span>
            </a>
          </Link>
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

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </div>
  );
}
