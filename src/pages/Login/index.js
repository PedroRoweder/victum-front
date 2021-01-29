import React, { useState } from "react";
// import getStyles from "./styles";

const Login = () => {
  // const styles = getStyles;

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="background"
      style={{
        display: "flex",
        width: "100vh",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "URL(~/assets/main_background.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="login"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "40vh",
          borderRadius: "5px",
        }}
      >
        <h1 style={{ marginBottom: "35px" }}>AUTOPFLEGE</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
          }}
        >
          <input
            type="text"
            name="login"
            placeholder="Login"
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "5px",
            }}
            value={form.login}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "5px",
            }}
            value={form.password}
            onChange={handleChange}
          />

          <input
            className="submit"
            type="submit"
            value="Entrar"
            style={{ border: "none", borderRadius: "5px", padding: "5px" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
