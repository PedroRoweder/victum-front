import React, { useState } from "react";

// Modules
import Stepper from "~/components/Stepper/stepper";

// Styling
import { getStyles } from "./styles";

const Register = () => {
  const styles = getStyles();
  const [form, setForm] = useState({});
  const [temp, setTemp] = useState({});
  const [named, setNamed] = useState(false);

  const handleNameChange = (e) => {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  return (
    <div id="root" style={styles.root}>
      {named ? (
        <Stepper>
          <div>CONTEUDO 1</div>
          <div>CONTEUDO 2</div>
          <div>CONTEUDO 3</div>
        </Stepper>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            border: "1px solid blue",
          }}
        >
          <input
            type="text"
            name="SKU"
            placeholder="Nome da Peça"
            style={styles.input}
            value={temp.SKU}
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="desc"
            placeholder="Descrição"
            style={styles.input}
            value={temp.desc}
            onChange={handleNameChange}
          />
          <button
            type="button"
            style={styles.button}
            onClick={() => {
              setForm({ ...form, temp });
              setTemp({});
              setNamed(true);
            }}
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
