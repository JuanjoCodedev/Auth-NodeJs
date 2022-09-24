import React, { useState } from "react";
import axios from "axios";

import { Container, Text, TextSmall, Img, Button, Enlace } from "./Styles/Style-General";
import { Form, FormControl, Input, Label } from "./Styles/Style-Form";
import { useNavigate } from "react-router-dom";

import logo from "../img/closet.png";

export const FormSingup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:4000/singup",
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
      console.log(res.data);
      Navigate("/");
    } catch (error) {
      console.log("ERROR,FORMULARIO NO ENVIADO");
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <Container width="30%" widthIpad="50%" widthPhone="90%" widthPhoneX="90%">
        <Form height="38rem" onSubmit={handleSubmit}>
          <Container height="8rem">
            <Img src={logo} h="4rem" />
            <Text>Empecemos</Text>
            <TextSmall textAlign="center">Regístrate y continuamos</TextSmall>
          </Container>

          <FormControl>
            <Label>Nombre</Label>
            <Input type="text" onChange={(ev) => setName(ev.target.value)} />
          </FormControl>

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
            <Button type="submit">Registrar</Button>
          </FormControl>

          <Container height="2rem" flexDirection="row">
            <TextSmall>¿Tienes cuenta?</TextSmall>
            <Enlace to="/">Iniciar sesión</Enlace>
          </Container>
        </Form>
      </Container>
    </Container>
  );
};
