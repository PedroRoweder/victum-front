import React, { useState } from "react";
import history from "~/services/history";

import list from "./DrawerList";

const getStyles = () => {
  const styles = {
    root: {
      display: "flex",
      minWidth: "246px",
      height: "calc(100vh - 70px)",
      backgroundImage: "linear-gradient(var(--primaryGradient))",
    },
    listContainer: {
      padding: "0 30px",
      marginTop: "10vh",
    },
    listItem: {
      fontSize: 17,
      display: "flex",
      marginBottom: 40,
      cursor: "pointer",
      alignItems: "center",
      color: "var(--white)",
    },
    selectedListItem: {
      fontSize: 18,
      display: "flex",
      fontWeight: 600,
      marginBottom: 40,
      cursor: "pointer",
      alignItems: "center",
      color: "var(--white)",
    },
    icon: {
      marginRight: 10,
    },
  };

  return styles;
};

const getUrlDrawerIndex = () =>
  list.findIndex((item) => item.path === history.location.pathname);

const Drawer = () => {
  const [selectedValue, setSelectedValue] = useState(getUrlDrawerIndex() || 0);
  const styles = getStyles();

  return (
    <div style={styles.root}>
      <ul style={styles.listContainer}>
        {list &&
          list.map((item, index) => (
            <li
              key={item.path}
              style={
                selectedValue === index
                  ? styles.selectedListItem
                  : styles.listItem
              }
              onClick={() => {
                setSelectedValue(index);
                history.push(item.path);
              }}
              aria-hidden="true"
            >
              <img src={item.icon} alt="" style={styles.icon} />
              {item.label}
            </li>
          ))}
        <li
          style={{
            position: "absolute",
            bottom: -20,
            left: 30,
            ...styles.listItem,
          }}
        >
          Sair
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
