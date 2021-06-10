import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import AllOrdersAction from "./Actions/AllOrdersAction";
import Avatar from "./Avatar/Avatar";
import Select from "./Select";

export default function AllOrders() {
  const [checked, setChecked] = React.useState(true);


  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "",
        field: "Id",
        width: 20,
      },
      {
        label: "Invoice",
        field: "Invoice",
        width: 270,
      },
      {
        label: "Table",
        field: "Table",
        width: 270,
      },
      {
        label: "Total Item",
        field: "TotalItem",
        width: 200,
      },
      
      {
        label: "Amount",
        field: "Amount",
        width: 200,
      },
      {
        label: "Date",
        field: "Date",
        sort: "asc",
        width: 100,
      },
      
      {
        label: "Status",
        field: "Status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Payment",
        field: "Payment",
        sort: "disabled",
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
            Invoice: "66445",
            Table: "Table 3",
            TotalItem: "5 Items",
            Amount: "Rs 430",
            Date: "Today",
            Status: <span class="badge badge-pill badge-primary py-1">Completed</span>,
            Payment: <Select state="paid"/>,
            Action: <AllOrdersAction />
        },
        {
          Id: "02",
          Invoice: "65453",
          Table: "Table 3",
          TotalItem: "5 Items",
          Amount: "Rs 500",
          Date: "10-21-2020",
          Status: <span class="badge badge-pill badge-warning px-3 py-1">Pending</span>,
          Payment: <Select state="not-paid"/>,
          Action: <AllOrdersAction />
      }
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
