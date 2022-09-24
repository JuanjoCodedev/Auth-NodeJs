import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Style-Theme";

import { NavBar } from "../components/NavBar";
import { FormProfile } from "../components/FormProfile";

export const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <main>
        <FormProfile />
      </main>
    </ThemeProvider>
  );
};
