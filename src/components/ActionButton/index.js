import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledButton } from "./styles";

const ActionButton = ({ onClick, color, icon }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton color={color} onClick={handleClick} type="button">
      <img src={icon} alt="" />
    </StyledButton>
  );
};

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ActionButton;
