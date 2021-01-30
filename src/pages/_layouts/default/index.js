import React from "react";
import PropTypes from "prop-types";

// Components
import { Wrapper, Container, Content } from "./styles";
import TopBar from "~/components/TopBar";
import Drawer from "~/components/Drawer";

const DefaultLayout = ({ children }) => (
  <Wrapper>
    <TopBar />
    <Container>
      <Drawer />
      <Content>{children}</Content>
    </Container>
  </Wrapper>
);

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
