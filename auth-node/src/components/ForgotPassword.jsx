import React, { useState } from "react";
import axios from "axios";

import { Container, Text, TextSmall, Img, Button, Enlace } from "./Styles/Style-General";
import { Form, FormControl, Input, Label } from "./Styles/Style-Form";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import logo from "../img/closet.png";

export const FormForgotPassword = () => {
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const location = useLocation();

  const Navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const token = location.pathname.split("/")[2];
      console.log(token);

      const res = await axios({
        method: "put",
        url: "http://localhost:4000/updated",
        data: {
          token: token,
          password: password,
        },
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Contraseña actualizada",
        text: "Su contraseña ha sido actualizada con exito, por favor inicia sesión con tu cuenta.",
        showConfirmButton: true,
      });
      Navigate("/");
    } catch (error) {
      console.log("ERROR,FORMULARIO NO ENVIADO");
    }

    const token = location.pathname.split("/")[2];
    console.log(token);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <Container width="30%" widthIpad="50%" widthPhone="90%" widthPhoneX="90%">
        <Form height="23rem" onSubmit={handleSubmit}>
          <Container>
            <Img src={logo} h="4rem" />
            <Text>Maranatha Closet</Text>
            <TextSmall textAlign="center">Por favor ingresa tu nueva contraseña segura.</TextSmall>
          </Container>

          <FormControl>
            <Label>Contraseña</Label>
            <Input type={passwordShown ? "text" : "password"} onChange={(ev) => setPassword(ev.target.value)} />
            <Label>
              <input type="checkbox" id="cbox" onClick={togglePassword} /> Mostrar contraseña
            </Label>
          </FormControl>

          <FormControl>
            <Button type="submit">Enviar</Button>
          </FormControl>

          <Container h="3rem" flexDirection="row">
            <Enlace to="/">Cancelar actualización</Enlace>
          </Container>
        </Form>
      </Container>
    </Container>
  );
};
