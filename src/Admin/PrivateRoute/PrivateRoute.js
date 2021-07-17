import React from "react"
import { Route, Redirect, useLocation  } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
// import CurrentUser from './IrivateRoute';
import Login from "../Login/Login";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  const location = useLocation();
// alert(location.pathname)
  // const currentUser = false
  // let { path, url } = useRouteMatch();
  

  console.log(currentUser)


  return (
    <>

    <Route
      {...rest}
      render={props => {
        return currentUser ? <Redirect to='/dashboard' /> : <Redirect to="/login" />
      }}
    ></Route>
    </>
  )
}
