import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";

// Routes
import Routes from "./routes";

// Styles
import GlobalStyle from "./styles/global";

const App = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
