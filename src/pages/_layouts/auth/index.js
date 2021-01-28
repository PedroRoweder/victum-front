import React from "react";
import PropTypes from "prop-types";

// Components
import { AuthWrapper } from "./styles";

const AuthLayout = ({ children }) => <AuthWrapper>{children}</AuthWrapper>;

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
