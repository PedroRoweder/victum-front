import React, { useState, useRef, useEffect } from "react";
import history from "~/services/history";

// Icons
import arrowDown from "~/assets/icons/arrow-down.svg";

const getStyles = (dropdownOpen) => {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      width: "44px",
      height: "44px",
      backgroundColor: "#555",
      borderRadius: 50,
      marginRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: 600,
      fontSize: 17,
    },
    name: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#474747",
      width: 110,
    },
    dropdownContainer: {
      position: "relative",
    },
    dropdownButton: {
      border: "none",
      background: "none",
    },
    dropdownMenu: {
      display: dropdownOpen ? "block" : "none",
      position: "absolute",
      right: 7,
      // border: "1px solid #c7c7c7",
      // borderRadius: "5px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "15px 15px",
      width: 130,
      backgroundColor: "white",
      cursor: "pointer",
    },
    dropdownMenuItem: {
      border: "none",
      background: "none",
      fontSize: 16,
      color: "#474747",
    },
  };

  return styles;
};

const User = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const styles = getStyles(dropdownOpen);
  const optionDiv = useRef();

  const handleClick = (e) => {
    if (optionDiv.current.contains(e.target)) {
      return;
    }
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  }, []);

  return (
    <div style={styles.root}>
      {/* This div is mocking the avatar image */}
      <div style={styles.avatar}>A</div>
      <p style={styles.name}>Admin</p>
      <div style={styles.dropdownContainer} ref={optionDiv}>
        <button
          type="button"
          style={styles.dropdownButton}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img src={arrowDown} alt="" />
        </button>
        <div
          style={styles.dropdownMenu}
          aria-hidden="true"
          onClick={() => history.push("/logout")}
        >
          <ul>
            <li style={styles.dropdownMenuItem}>Sair</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
