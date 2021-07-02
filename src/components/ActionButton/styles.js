import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 100%;
  background-color: ${({ color }) => color};

  max-width: 35px;
  max-height: 35px;

  min-width: 35px;
  min-height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 20px;
    object-fit: contain;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;
