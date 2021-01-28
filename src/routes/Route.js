import React from "react";
import { Route, Redirect } from "react-router-dom";

// Layouts
import AuthLayout from "~/pages/_layouts/auth";
import DefaultLayout from "~/pages/_layouts/default";

// eslint-disable-next-line react/prop-types
const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
