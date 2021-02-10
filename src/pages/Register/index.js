import React, { useState, useEffect } from "react";

// Modules
import Stepper from "~/components/Stepper/stepper";

// Styling
import { getStyles, Notification, NotificationButton } from "./styles";

const Register = () => {
  const styles = getStyles();
  const [temp, setTemp] = useState({ SKU: "", desc: "" });
  const [form, setForm] = useState({ SKU: "", desc: "", operationList: [] });
  const [named, setNamed] = useState(false);
  const [operations, setOperations] = useState([]);
  const [notification, setNotification] = useState(false);

  const handleNameChange = (e) => {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  const verifyFields = () => {
    if (temp?.SKU && temp?.desc) {
      setNotification(false);
      setForm({ ...temp });
      setTemp({});
      setNamed(true);
    } else {
      setNotification(true);
      setNamed(false);
    }
  };

  const listOperations = () => {
    const ops = form.operationList.map((item, index) => <div>{index}</div>);
    return ops;
  };

  useEffect(() => {
    if (form.operationList?.length > 0) {
      setOperations(listOperations());
    }
  }, [form]);

  const createOperation = () =>
    form?.operationList?.length > 0
      ? setForm({
          ...form,
          operationList: [
            ...form.operationList,
            { operationTitle: "", status: "", steps: [] },
          ],
        })
      : setForm({
          ...form,
          operationList: [{ operationTitle: "", status: "", steps: [] }],
        });

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
        <>
          <button
            type="button"
            style={styles.button}
            onClick={() => createOperation()}
          >
            + Adicionar Nova Operação para <strong>{form.SKU}</strong>
          </button>
          <Stepper>{operations}</Stepper>
        </>
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
