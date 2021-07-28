import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import CustomersAction from "./Actions/CustomersAction";
import Avatar from "./Avatar/Avatar";
import { useAuth } from "../../../contexts/AuthContext"
import { firestore } from "../../../firebase"
import TableSpinner from "../../Spinner/TableSpinner/TableSpinner";


export default function CustomersTable() {

  const [data, setData] = React.useState([]);

  function users() {

  firestore
  .collection("users")
  // .orderBy('createdAt', 'asc')
  .onSnapshot(function (querySnapshot) {
    setData(
      querySnapshot.docs.map((doc) => (
            doc.data()
      //   {
      //   profileImage: doc.data().dp,
      //   name: doc.data().firstName +" "+ doc.data().lastName,
      //   email: doc.data().email,
      //   phone: doc.data().phone,
      //   lastLogin: doc.data().lastLogin,
      //   ip: doc.data().ip,
      //   // address: doc.data().address,
      //   // createdOn: doc.data().createdOn,

      // }
      ))
    );
  });
  };

  React.useEffect(() => {
    users();
  }, []);


  // {
  //   Id: "01",
  //   Image: <Avatar />,
  //   Name: "Donna Hubber",
  //   Email: <a href = "mailto: DonnaHubber@gmail.com">DonnaHubber@gmail.com</a>,
  //   Phone: <a href="tel: 03431356835">03431356835</a>,
  //   lastLogin: "03:05 05/07/2020",
  //   ip: "192.168. 0.1",
  //   Action: <CustomersAction />,
  // },

console.log(data)

  const usersData = {
    columns: [
      {
        label: "",
        field: "id",
        width: 270,
      },
      {
        label: "Image",
        field: "profileImage",
        width: 270,
      },
      {
        label: "User Name",
        field: "name",
        width: 270,
      },
      {
        label: "Email",
        field: "email",
        width: 200,
      },
      {
        label: "Phone",
        field: "phone",
        width: 200,
      },
      {
        label: "Last Login",
        field: "lastLogin",
        width: 200,
      },
      {
        label: "IP Address",
        field: "ip",
        // sort: "asc",
        width: 100,
      },
      
      {
        label: "Action",
        field: "action",
        // sort: "asc",
        width: 100,
      },
    ],
    rows: [
      ...data.map((item, ind)=>({
          id: ind,
          profileImage: <Avatar image={item.dp}/>,
          name: item.firstName + " " + item.lastName,
          email: <a href = "mailto: DonnaHubber@gmail.com">{item.email}</a>,
          phone: <a href={"tel: "+item.phone}>{item.phone}</a>,
          lastLogin: item.lastLogin.nanoseconds + item.lastLogin.seconds,
          ip: item.ip,
          action: <CustomersAction />,
         })
      )
    ]
  };

  console.log(data)
  return (
    <>

    {
      (!data.length)
      ?
      <TableSpinner />
      :
      <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={usersData}
    />
    }
     
    </>
  );
}