import React, { useState, useEffect } from "react";

// Modules
import Stepper from "~/components/stepper";
import PartName from "./components/partName";
import OperationList from "./components/OperationList";

// Styling
import getStyles from "./styles";

const Register = () => {
  const styles = getStyles();
  const [named, setNamed] = useState();

  useEffect(() => {
    setNamed(false);
  }, []);

  return (
    <div style={styles.root}>
      <OperationList />
      <div className="formContainer" style={styles.formContainer}>
        <form onChange={(e) => e.preventDefault()} style={styles.form}>
          <PartName />
          <button type="submit" style={styles.button}>
            Next
          </button>
        </form>
      </div>
      {named ? <Stepper /> : <></>}
    </div>
  );
};

export default Register;
