import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ActionButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

ActionButton.propTypes = {
  color: PropTypes.string,
  border: PropTypes.bool,
  maxWidth: PropTypes.string,
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

ActionButton.defaultProps = {
  color: "var(--primary)",
  border: false,
  maxWidth: "200px",
  textColor: "var(--white)",
};
export default ActionButton;
