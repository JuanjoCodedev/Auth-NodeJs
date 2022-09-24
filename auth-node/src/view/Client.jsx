import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Style-Theme";

import { NavBar } from "../components/NavBar";

export const Client = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
};
