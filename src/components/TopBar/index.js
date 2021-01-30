import React from "react";

// Images
import logo from "~/assets/autopflege.png";

// Components
import User from "~/components/TopBar/User";

const getStyles = () => {
  const styles = {
    root: {
      height: "70px",
      display: "flex",
      justifyContent: "center",
      flex: 1,
    },
    container: {
      width: "98vw",
      marginTop: 10,
      marginBottom: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      height: 30,
    },
  };

  return styles;
};

const TopBar = () => {
  const styles = getStyles();

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <img style={styles.image} src={logo} alt="Aloogie logo" />
        <User />
      </div>
    </div>
  );
};

export default TopBar;
