import React from "react";
import { Switch } from "react-router-dom";

// Route Default Handler
import Route from "./Route";

// Pages
import Login from "~/pages/Login";
import Query from "~/pages/Query";
import Register from "~/pages/Register";
import Dashboard from "~/pages/Dashboard";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="/cadastro" isPrivate component={Register} />
    <Route path="/consulta" isPrivate component={Query} />
  </Switch>
);

export default Routes;
