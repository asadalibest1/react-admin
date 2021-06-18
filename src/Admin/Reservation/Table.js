import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import Action from "./Actions/Action";
import Avatar from "./Avatar/Avatar";


export default function CustomersTable() {
  const [checked, setChecked] = React.useState(true);


  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "",
        field: "Id",
        width: 20,
      },
      {
        label: "Image",
        field: "Image",
        width: 270,
      },
      {
        label: "Customer Name",
        field: "customerName",
        width: 270,
      },
      {
        label: "Table No",
        field: "tableNo",
        width: 200,
      },
      
      {
        label: "No. of Person",
        field: "NoOfPerson",
        width: 200,
      },
      {
        label: "From / to",
        field: "fromTo",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Issue Date",
        field: "date",
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
        Image: <Avatar />,
        customerName: "Donna Hubber",
        tableNo: "5",
        NoOfPerson: "12",
        fromTo: <div><span className="text-danger">03:05 05/07/2020</span> / 04:05 05/07/2020</div>,
        date: "04/07/2020",
        Action: <Action />,
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
