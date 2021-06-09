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
          Action: <AdminsAction />,
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
