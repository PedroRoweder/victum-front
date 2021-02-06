const getStyles = () => {
  const styles = {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      border: "1px solid red",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
    companyLogo: {
      width: 250,
      marginBottom: 75,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "40%",
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
      marginTop: 20,
    },
  };

  return styles;
};

export default getStyles;
