import React from "react";
import { Switch } from "react-router-dom";

// Route Default Handler
import Route from "./Route";

// Pages
import Login from "~/pages/Login";
import TestPage from "~/pages/Test";

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/dif" isPrivate component={TestPage} />
  </Switch>
);

export default Routes;
