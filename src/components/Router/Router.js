import React, { lazy, Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import Loading from "components/shared/Loading";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import('components/pages/Login'))
const NotFound = lazy(() => import('components/pages/NotFound'))
const Register = lazy(() => import('components/pages/Register'))
const Dashboard = lazy(() => import('components/pages/Dashboard'))
const Messages = lazy(() => import('components/pages/Messages'))

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <PrivateRoute path="/" exact component={Dashboard}></PrivateRoute>
        <PrivateRoute path="/messages" exact component={Messages}></PrivateRoute>
        <Route path="/*" exact component={NotFound}></Route>
      </Switch>
    </Suspense>
  );
};

Router.propTypes = {
  //
};

export default Router;
