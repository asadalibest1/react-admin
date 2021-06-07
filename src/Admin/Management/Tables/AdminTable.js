import React from "react";
import { MDBDataTableV5 } from "mdbreact";

// import { ToggleSwitch, DragSwitch } from "react-dragswitch";
// import "react-dragswitch/dist/index.css";

// import Switch from "react-switch";
// import { Helmet } from "react-helmet";
// import $ from "jquery";


import AdminsAction from "./Actions/AdminsAction";
import Avatar from "./Avatar/Avatar";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


export default function AdminTable() {
  const [checked, setChecked] = React.useState(true);


  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "",
        field: "Id",
        width: 10,
      },
      {
        label: "Image",
        field: "Image",
        width: 270,
      },
      {
        label: "Admin Name",
        field: "AdminName",
        width: 270,
      },
      {
        label: "Email",
        field: "AdminEmail",
        width: 200,
      },
      {
        label: "Role",
        field: "RoleName",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Status",
        field: "Status",
        width: 150,
      },
      {
        label: "Action",
        field: "Action",
        width: 100,
      },
    ],
    rows: [
      {
        Id: "01",
        Image: (
          <img
            className="rounded-circle p-1 border border-success"
            src="https://officio.work/user-uploads/avatar/a869cd5fcb4b4b0f05cae0d2d7f0813c.jpg"
            style={{ width: "55px", height: "55px" }}
          />
        ),
        AdminName: "Donna Hubber",
        AdminEmail: "DonnaHubber@gmail.com",
        RoleName: "Admin 2",
        date: "2021/05/25",
        Status: <BootstrapSwitchButton
                  checked={true}
                  onlabel='On'
                  offlabel='Off'
                  onChange={(check)=> setChecked(check)}
                  size="sm"
                  onstyle="primary"
                  offstyle="warning"
          />,
        Action: <AdminsAction />,
        },
      {
        Id: "02",
        Image: (
          <img
            className="rounded-circle p-1 border border-success"
            src="https://officio.work/user-uploads/avatar/a869cd5fcb4b4b0f05cae0d2d7f0813c.jpg"
            style={{ width: "55px", height: "55px" }}
          />
        ),
        AdminName: "Donna Hubber",
        AdminEmail: "DonnaHubber@gmail.com",
        RoleName: "Admin 2",
        date: "2021/05/25",
        Status: <BootstrapSwitchButton
                  checked={true}
                  onlabel='On'
                  offlabel='Off'
                  onChange={(check)=> setChecked(check)}
                  size="sm"
                  onstyle="primary"
                  offstyle="warning"
          />,
        Action: (
          <div class="btn-group dropbottom">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button">
                Action
              </button>
              <button class="dropdown-item" type="button">
                Another action
              </button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        ),
      },
      {
        Id: "03",
        Image: (
          <img
            className="rounded-circle p-1 border border-success"
            src="https://officio.work/user-uploads/avatar/a869cd5fcb4b4b0f05cae0d2d7f0813c.jpg"
            style={{ width: "55px", height: "55px" }}
          />
        ),
        AdminName: "Donna Hubber",
        AdminEmail: "DonnaHubber@gmail.com",
        RoleName: "Admin 2",
        date: "2021/05/25",
        Status:"",
        Action: (
          <div class="btn-group dropbottom">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button">
                Action
              </button>
              <button class="dropdown-item" type="button">
                Another action
              </button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        ),
      },
    ],
  });

  return (
    <>  
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
      />
    </>
  );
}
