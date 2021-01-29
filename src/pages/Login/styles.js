import backgroundImage from "~/assets/login-background.jpg";

const getStyles = () => {
  const styles = {
    root: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexBasis: "40%",
    },
    companyLogo: {
      width: 250,
      marginBottom: 75,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
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
