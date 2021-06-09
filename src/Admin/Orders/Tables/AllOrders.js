import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import AllOrdersAction from "./Actions/AllOrdersAction";
import Avatar from "./Avatar/Avatar";


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
            Date: "10-21-2020",
            Payment: <select class="form-control">
                        <option value="1">Paid</option>
                        <option value="2">Not Paid</option>
                    </select>,
            Action: "Actions"
        }
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
