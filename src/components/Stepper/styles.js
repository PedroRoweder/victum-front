import styled, { css } from "styled-components";

export const getStyles = () => {
  const styles = {
    line: {
      height: "3px",
      width: "80px",
      backgroundColor: "darkgray",
    },
  };

  return styles;
};

export const Line = styled.div`
  height: 3px;
  width: 80px;
  background-color: ${(props) =>
    props.active ? "var(--primary)" : "lightgray"};
`;

export const StepperItem = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) =>
    props.active ? "var(--primary)" : "var(--gray)"};
  border-radius: 50%;
`;

export const Button = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 300;
  padding: 8px;
  font-size: 12;
  border-radius: 50px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};

  ${(props) =>
    props.left &&
    css`
      position: absolute;
      left: 15px;
    `}
  ${(props) =>
    props.right &&
    css`
      position: absolute;
      right: 15px;
    `};
`;
