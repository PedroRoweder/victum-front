import styled from "styled-components";

export const getStyles = () => {
  const styles = {
    root: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },
    input: {
      border: "none",
      backgroundColor: "rgba(65, 70, 70, 0.2)",
      color: "var(--gray)",
      fontWeight: 600,
      fontSize: 20,
      borderRadius: 50,
      padding: "15px 20px",
      marginBottom: 15,
    },
    button: {
      border: "none",
      backgroundColor: "var(--primary)",
      color: "var(--white)",
      fontWeight: 500,
      padding: 10,
      fontSize: 20,
      borderRadius: 50,
    },
  };

  return styles;
};

export const Notification = styled.div`
  background-color: rgba(230, 175, 46, 0.7);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: absolute;
  top: 0;
  font-weight: 600;
  font-size: 15;

  &:hover {
    box-shadow: 0px 1px 0px 0.5px rgba(0, 0, 0, 0.2);
  }
`;

export const NotificationButton = styled.button`
  border: none;
  margin: 0;
  padding: 8px;
  background-color: transparent;
  position: absolute;
  right: 20px;
  font-weight: 600;
  font-size: 15;

  &:hover {
    color: red;
  }
`;
