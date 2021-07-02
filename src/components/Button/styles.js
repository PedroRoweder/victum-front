import styled from "styled-components";

export const Button = styled.button.attrs({ type: "checkbox" })`
  background-color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.maxWidth};
  color: ${(props) => props.textColor};
  margin: 15px;
  white-space: nowrap;
  font-weight: 400;
  text-align: center;
  font-size: 15px;
  padding: 13px 60px;
  border-radius: 50px;
  border: ${(props) =>
    props.border ? `2px solid ${props.textColor}` : "none"};

  &:hover {
    font-weight: 600;
  }

  transition: all 200ms;
`;
