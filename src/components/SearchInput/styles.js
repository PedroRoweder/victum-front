import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-right: 5px;

  img {
    margin-left: -25px;
    background-color: var(--white);
    margin-bottom: 1px;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 5px 2px;
  border-bottom: 1px solid black;
`;
