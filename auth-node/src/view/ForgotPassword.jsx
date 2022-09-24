import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Style-Theme";

import { FormForgotPassword } from "../components/ForgotPassword";

export const ForgotPassword = () => {
  return (
    <header>
      <ThemeProvider theme={theme}>
        <FormForgotPassword />
      </ThemeProvider>
    </header>
  );
};
