import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Style-Theme";

import { FormValidEmail } from "../components/FormValidEmail";

export const ValidEmail = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <FormValidEmail />
      </ThemeProvider>
    </main>
  );
};
