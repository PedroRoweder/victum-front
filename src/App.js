import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

// Services
import history from "./services/history";

// Routes
import Routes from "./routes";

// Styles
import GlobalStyle from "./styles/global";

const App = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyle />
    <ToastContainer autoClose={3000} draggable transition={Slide} />
  </Router>
);

export default App;
