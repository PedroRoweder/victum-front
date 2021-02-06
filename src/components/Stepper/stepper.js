import React, { useState, useEffect, Children } from "react";

// Styling
import { Button, StepperItem, Line } from "./styles";

// eslint-disable-next-line react/prop-types
const Stepper = ({ children }) => {
  const pages = Children.toArray(children);

  const [actualPage, setActualPage] = useState();
  const [stepperContent, setStepperContent] = useState([]);

  useEffect(() => {
    setActualPage(0);
  }, []);

  useEffect(() => {
    const steps = pages.map((item, index) =>
      index === pages.length - 1 ? (
        <StepperItem active={`${index}` <= actualPage}>{index + 1}</StepperItem>
      ) : (
        <>
          <StepperItem active={`${index}` <= actualPage}>
            {index + 1}
          </StepperItem>{" "}
          <Line active={`${index}` < actualPage} />
        </>
      )
    );
    setStepperContent(steps);
  }, [actualPage]);

  return (
    <div
      className="stepper"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        border: "1px solid black",
      }}
    >
      {children[actualPage]}
      <div
        className="stepperNavigator"
        style={{
          position: "absolute",
          bottom: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          border: "1px solid green",
        }}
      >
        <Button
          left
          isVisible={!(actualPage === 0)}
          onClick={() => {
            setActualPage(
              // eslint-disable-next-line react/prop-types
              actualPage === 0 ? actualPage : actualPage - 1
            );
          }}
        >
          VOLTAR
        </Button>
        {stepperContent}
        <Button
          right
          isVisible={pages.length > actualPage + 1}
          onClick={() => {
            setActualPage(
              // eslint-disable-next-line react/prop-types
              pages.length > actualPage + 1 ? actualPage + 1 : actualPage
            );
          }}
        >
          AVANÇAR
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
