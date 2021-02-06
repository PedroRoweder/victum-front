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
      border: "1px solid red",
    },
    input: {
      border: "none",
      backgroundColor: "rgba(65, 70, 70,0.2)",
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

export const Warning = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;
