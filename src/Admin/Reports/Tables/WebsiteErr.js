import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import Actions from "./Actions/Actions";
import Avatar from "./Avatar/Avatar";
import Select from "./Select";
import img from "../../../img/noImagePreview.png"

export default function WebsiteErrTable() {
  const [checked, setChecked] = React.useState(true);


  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "",
        field: "Id",
        width: 20,
      },
      {
        label: "Name",
        field: "name",
        width: 270,
      },
      {
        label: "Email",
        field: "email",
        width: 270,
      },
      {
        label: "Phone",
        field: "phone",
        width: 270,
      },
      {
        label: "Report",
        field: "report",
        width: 200,
      },
      
      {
        label: "Date",
        field: "date",
        width: 200,
      },
      {
        label: "Details",
        field: "details",
        sort: "asc",
        width: 100,
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
            name: "asim khan",
            email: "abc@gmail.com",
            phone: "03424672947",
            report: <div><i className="fa fa-user mr-1"></i>employee<br /><img className="float-right" src={img} width="30" height="30" alt="img"/></div>,
            date: "Today",
            details: "sdsad",
            Action: <Actions />
        },
        
        {
          Id: "02",
          name: "asim khan",
          email: "abc@gmail.com",
          phone: "03424672947",
          report: <div><i className="fa fa-user mr-1"></i>employee<br /><img className="float-right" src={img} width="30" height="30" alt="img"/></div>,
          date: "Today",
          details: "sdsad",
          Action: <Actions />
      },
      
      {
        Id: "03",
        name: "asim khan",
        email: "abc@gmail.com",
        phone: "03424672947",
        report: <div><i className="fa fa-user mr-1"></i>employee<br /><img className="float-right" src={img} width="30" height="30" alt="img"/></div>,
        date: "Today",
        details: "sdsad",
        Action: <Actions />
    },
        
    ],
  });

  return (
    <>  
      <MDBDataTableV5
        hover
        entriesOptions={[ 10, 20, 30]}
        entries={5}
        pagesAmount={4}
        data={datatable}
      />
    </>
  );
}
