import React, { useState } from "react";
import axios from "axios";

import { Container, Text, TextSmall, Img, Button, Enlace } from "./Styles/Style-General";
import { Form, FormControl, Input, Label } from "./Styles/Style-Form";
import Swal from "sweetalert2";

import logo from "../img/closet.png";

export const FormValidEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const req = await axios({
        method: "post",
        url: "http://localhost:4000/emailVerification",
        data: {
          email: email,
        },
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email validado",
        text: "Por favor revisa tu cuenta de correo eléctronico y haz click en el enlace para tu nueva contraseña.",
        showConfirmButton: true,
      });
    } catch (error) {
      console.log("ERROR,FORMULARIO NO ENVIADO");
    }
  };

  return (
    <Container>
      <Container width="30%" widthIpad="50%" widthPhone="90%" widthPhoneX="90%">
        <Form height="23rem" onSubmit={handleSubmit}>
          <Container height="8rem">
            <Img src={logo} h="4rem" />
            <Text>Maranatha Closet</Text>
            <TextSmall textAlign="center">Por favor ingresa tu nueva contraseña segura.</TextSmall>
          </Container>

          <FormControl>
            <Label>Correo eléctronico</Label>
            <Input type="email" onChange={(ev) => setEmail(ev.target.value)} />
          </FormControl>

          <FormControl>
            <Button type="submit">Enviar</Button>
          </FormControl>

          <Container height="2rem" flexDirection="row">
            <TextSmall>¿Te acordaste de tu contraseña?</TextSmall>
            <Enlace to="/">Iniciar sesión</Enlace>
          </Container>
        </Form>
      </Container>
    </Container>
  );
};
