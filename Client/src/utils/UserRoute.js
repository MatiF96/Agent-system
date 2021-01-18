import React, { useContext } from 'react';
import {UserContext} from '../contexts/UserContext';
import { Route, Redirect } from "react-router-dom"

export const UserRoute = ({ component: Component, ...rest }) => {
  const { whoAmI } = useContext(UserContext);

  return (
    <Route {...rest} render={(props) => (
      (whoAmI())
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}