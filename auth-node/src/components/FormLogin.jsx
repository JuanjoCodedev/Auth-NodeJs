import React, { useState } from "react";
import axios from "axios";

import { Container, Text, TextSmall, Img, Button, Enlace } from "./Styles/Style-General";
import { Form, FormControl, Input, Label } from "./Styles/Style-Form";
import { useNavigate } from "react-router-dom";

import logo from "../img/closet.png";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const req = await axios({
        method: "post",
        url: "http://localhost:4000/login",
        data: {
          email: email,
          password: password,
        },
      });

      const token = req.data.token;
      const uid = req.data.id;

      sessionStorage.setItem("token", token);
      localStorage.setItem("uid", uid);

      Navigate("/Client");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <Container width="30%" widthIpad="50%" widthPhone="90%" widthPhoneX="90%">
        <Form height="32rem" onSubmit={handleSubmit}>
          <Container height="8rem">
            <Img src={logo} h="4rem" />
            <Text>Empecemos</Text>
            <TextSmall textAlign="center">Regístrate y continuamos</TextSmall>
          </Container>

          <FormControl>
            <Label>Correo eléctronico</Label>
            <Input type="email" onChange={(ev) => setEmail(ev.target.value)} />
          </FormControl>

          <FormControl>
            <Label>Contraseña</Label>
            <Input type={passwordShown ? "text" : "password"} onChange={(ev) => setPassword(ev.target.value)} />
            <Label>
              <input type="checkbox" id="cbox" onClick={togglePassword} /> Mostrar contraseña
            </Label>
          </FormControl>

          <FormControl>
            <Button type="submit">Iniciar sesión</Button>
          </FormControl>

          <Container height="1.5rem" flexDirection="row">
            <TextSmall>¿No tienes cuenta?</TextSmall>
            <Enlace to="/Singup">Resgitrate aqui</Enlace>
          </Container>

          <Container height="2rem" flexDirection="row">
            <Enlace to="/ValidEmail">Recuperar contraseña</Enlace>
          </Container>
        </Form>
      </Container>
    </Container>
  );
};
