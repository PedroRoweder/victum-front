import styled from "styled-components";

export const getStyles = () => {
  const styles = {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      border: "2px solid var(--primary)",
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
      minWidth: "300px",
    },
    button: {
      border: "none",
      backgroundColor: "var(--primary)",
      color: "var(--white)",
      fontWeight: 500,
      padding: 10,
      fontSize: 20,
      borderRadius: 50,
      minWidth: "300px",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      height: "100%",
      minWidth: "200px",
      backgroundColor: "white",
      border: "2px solid var(--primary)",
    },
    icons: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      right: 5,
    },
    operationNameInput: {
      border: "none",
      backgroundColor: "transparent",
      color: "white",
      width: "70%",
      borderBottom: "2px solid white",
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

export const AddNew = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 300;
  padding: 5px;
  font-size: 15;
  position: absolute;
  bottom: 0;
  left: -5;
  width: 100%;

  &:hover {
    color: black;
  }
`;

export const Pencil = styled.img`
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const Check = styled.img`
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const Trash = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const EachOperation = styled.li`
  background-color: ${(props) => (props.selected ? "var(--primary)" : "white")};
  color: ${(props) => (props.selected ? "white" : "var(--primary)")};
  padding: 5px;
  border: 1px solid ${(props) => (props.selected ? "var(--primary)" : "white")};
  display: flex;
  flex-direction: row;
  position: relative;
  height: 32px;

  &:hover {
    cursor: pointer;
  }
`;

export const PositioningArrows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 8px;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button :hover {
    background-color: #129997;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

export const AddNewStep = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    background-color: var(--primary);
    padding: 20px;
    color: white;
    border-radius: 20px;

    :hover {
      background-color: #129997;
    }
  }
`;
