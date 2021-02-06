import React, { useState, useEffect } from "react";

const OperationList = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    setOperations(["OP 1", "OP 2", "OP 3"]);
  }, []);

  const fillOperations = () => {
    const operationSequence = operations.map((content) => (
      <li
        className="eachOperation"
        style={{
          padding: "10px",
          backgroundColor: "rgba(65, 70, 70,0.2)",
          border: "1px solid rgba(65, 70, 70,0.1)",
          color: "--gray",
        }}
      >
        {content}
      </li>
    ));

    return (
      <>
        {operationSequence}{" "}
        <li
          className="addNewOperation"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            padding: "10px",
            backgroundColor: "rgba(65, 70, 70,0.2)",
            border: "1px solid rgba(65, 70, 70,0.1)",
            color: "--gray",
          }}
        >
          + Add Operation
        </li>
      </>
    );
  };

  return (
    <div
      className="operationList"
      style={{
        position: "relative",
        display: "flex",
        alignSelf: "flex-start",
        flexDirection: "column",
        width: "150px",
        height: "100%",
        backgroundColor: "rgba(65, 70, 70,0.2)",
      }}
    >
      <ul>{fillOperations()}</ul>
    </div>
  );
};

export default OperationList;
