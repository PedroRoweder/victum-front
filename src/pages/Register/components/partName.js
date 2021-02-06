import React, { useState } from "react";

// Styling
import getStyles from "../styles";

const PartName = () => {
  const styles = getStyles();

  const [form, setForm] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <>
      <input
        type="text"
        name="partName"
        placeholder="Nome da Peça"
        style={styles.input}
        value={form.partName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="partDescription"
        placeholder="Descrição"
        style={styles.input}
        value={form.partDescription}
        onChange={handleChange}
      />
    </>
  );
};

export default PartName;
