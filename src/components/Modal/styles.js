import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const OuterDiv = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible;" : "hidden;")};

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 4;

  background-color: ${(props) =>
    props.isOpen ? "rgba(0,0,0,0.3)" : "rgba(0, 0, 0, 0)"};

  backdrop-filter: blur(2px);
  transition: 100ms ease-in;
`;

export const InnerDiv = styled.div`
  position: relative;
  background-color: var(--white);
  border-radius: 15px;
  min-height: 550px;
  min-width: 450px;
  max-width: 95vw;
  max-height: 90vh;
  overflow: auto;
  z-index: 5;

  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 200ms linear;
`;

export const InnerMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 10%;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 15px;
  padding-right: 15px;

  height: 50px;
  border-bottom: 1px solid var(--grayMedium);

  p {
    color: var(--darkGray);
    font-size: 18px;
    font-weight: 400;
  }

  img {
    cursor: pointer;
  }
`;

export const MessageInnerDiv = styled.div`
  position: relative;
  background-color: var(--white);
  border-radius: 15px;
  min-height: 250px;
  min-width: 600px;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 200ms linear;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  margin: 15px 15px 0px 0px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
  width: 100%;
`;
