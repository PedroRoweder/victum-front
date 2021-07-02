/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// these two eslint rules are for the correct working of the outside click
// and the closing img icon
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Icons
import closeIcon from "~/assets/icons/dark-close.svg";

// Components
import { OuterDiv, InnerDiv, CloseButton } from "../styles";

const Modal = ({ isOpen, handleClose, children, ...props }) => {
  const rootReference = useRef();
  const innerReference = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (e) => {
    // this checks if the click is in the outer div
    if (rootReference.current.contains(e.target)) {
      // this checks if the click is in the inner div
      if (innerReference.current.contains(e.target)) {
        // so, if click is inside inner div, dont close
        return;
      }
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick]);

  return (
    <OuterDiv {...props} isOpen={isOpen} ref={rootReference}>
      <InnerDiv ref={innerReference} isOpen={isOpen}>
        <CloseButton
          src={closeIcon}
          alt="Fechar"
          onClick={() => handleClose()}
        />
        {children}
      </InnerDiv>
    </OuterDiv>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
