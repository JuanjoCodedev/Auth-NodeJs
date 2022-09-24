import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Style-Theme";

import { FormLogin } from "../components/FormLogin";

export const Home = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <FormLogin />
      </ThemeProvider>
    </main>
  );
};
