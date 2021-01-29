import React, { useState } from "react";

// Images
import autopflegeLogo from "~/assets/autopflege-logo.png";

// Styling
import getStyles from "./styles";

const Login = () => {
  const styles = getStyles();
  const [form, setForm] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={styles.root}>
      <div style={styles.loginContainer}>
        <img style={styles.companyLogo} src={autopflegeLogo} alt="" />
        <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
          <input
            type="text"
            name="login"
            placeholder="Login"
            style={styles.input}
            value={form.login}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            style={styles.input}
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
