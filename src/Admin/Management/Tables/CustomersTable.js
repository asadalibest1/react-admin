import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import CustomersAction from "./Actions/CustomersAction";
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
        label: "User Name",
        field: "Name",
        width: 270,
      },
      {
        label: "Email",
        field: "Email",
        width: 200,
      },
      
      {
        label: "Phone",
        field: "Phone",
        width: 200,
      },
      {
        label: "Last Login",
        field: "lastLogin",
        sort: "disabled",
        width: 150,
      },
      {
        label: "IP Address",
        field: "ip",
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
        Name: "Donna Hubber",
        Email: <a href = "mailto: DonnaHubber@gmail.com">DonnaHubber@gmail.com</a>,
        Phone: <a href="tel: 03431356835">03431356835</a>,
        lastLogin: "03:05 05/07/2020",
        ip: "192.168. 0.1",
        Action: <CustomersAction />,
      },
      {
        Id: "02",
        Image: <Avatar />,
        Name: "Donna Hubber",
        Email: <a href = "mailto: DonnaHubber@gmail.com">DonnaHubber@gmail.com</a>,
        Phone: <a href="tel: 03431356835">03431356835</a>,
        lastLogin: "03:05 05/07/2020",
        ip: "192.168. 0.1",
        Action: <CustomersAction />,
      },
      {
        Id: "03",
        Image: <Avatar />,
        Name: "Donna Hubber",
        Email: <a href = "mailto: DonnaHubber@gmail.com">DonnaHubber@gmail.com</a>,
        Phone: <a href="tel: 03431356835">03431356835</a>,
        lastLogin: "03:05 05/07/2020",
        ip: "192.168. 0.1",
        Action: <CustomersAction />,
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
