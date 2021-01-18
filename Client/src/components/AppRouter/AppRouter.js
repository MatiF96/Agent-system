import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home from '../../containers/Home';
import Products from '../../containers/Products';

import LoginForm from "../../containers/LoginForm";
import RegisterForm from "../../containers/RegisterForm";

import { UserRoute } from '../../utils/UserRoute';

const AppRouter = () => {
  return (
    <Switch>
        <UserRoute exact path='/products' component={Products} />

        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />

        <Route path="*" component={Home} />
    </Switch>
)};

export default AppRouter;