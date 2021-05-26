import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const List = ({ operationList, children, ...props }) => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    setOperations(operationList);
  }, []);

  return <ul {...props}> {operations ? children : children} </ul>;
};

List.propTypes = {
  operationList: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

List.defaultProps = {
  operationList: [],
};

export default List;
