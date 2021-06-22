import React, { useState } from "react";

// Modules
import PartDetails from "~/components/PartDetails";

// Styling
import { getStyles, Notification, NotificationButton } from "./styles";

const Register = () => {
  const styles = getStyles();
  const [named, setNamed] = useState(false);
  const [notification, setNotification] = useState(false);
  const [temp, setTemp] = useState({ SKU: "", desc: "", operationList: [] });
  const [form, setForm] = useState({ SKU: "", desc: "", operationList: [] });

  const handlePartNameChange = (e) => {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  const verifyFields = () => {
    if (temp?.SKU && temp?.desc) {
      setNotification(false);
      setForm({ ...temp });
      setNamed(true);
    } else {
      setNotification(true);
      setNamed(false);
    }
  };

  return (
    <div id="root" style={styles.root}>
      {notification && (
        <Notification>
          Por favor, preencha todos os campos.{" "}
          <NotificationButton
            type="button"
            onClick={() => setNotification(false)}
          >
            X
          </NotificationButton>
        </Notification>
      )}
      {named ? (
        <PartDetails form={form} setForm={setForm} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="SKU"
            placeholder="SKU"
            style={styles.input}
            value={temp.SKU}
            onChange={handlePartNameChange}
          />
          <input
            type="text"
            name="desc"
            placeholder="Nome da Peça"
            style={styles.input}
            value={temp.desc}
            onChange={handlePartNameChange}
          />
          <button
            type="button"
            style={styles.button}
            onClick={() => {
              verifyFields();
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
