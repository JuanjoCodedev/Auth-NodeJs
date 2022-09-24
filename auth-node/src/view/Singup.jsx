import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Style-Theme";

import { FormSingup } from "../components/FormSingup";

export const Singup = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <FormSingup></FormSingup>
      </ThemeProvider>
    </main>
  );
};
