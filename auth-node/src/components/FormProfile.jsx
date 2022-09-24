import React, { useState, useEffect } from "react";

import { Text, Button, Container, Img, TextSmall } from "./Styles/Style-General";
import { Table, Thead, Tr, Th, Tbody, Td } from "./Styles/Style-Table";
import { Form, FormControl, Input, Label } from "./Styles/Style-Form";
import Swal from "sweetalert2";
import axios from "axios";
import logo from "../img/closet.png";

import { useNavigate } from "react-router-dom";

export const FormProfile = () => {
  const [datas, setDatas] = useState([]);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);

  const Navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const uid = localStorage.getItem("uid");
      const req = await axios({
        method: "put",
        url: `http://localhost:4000/updateProfile/${uid}`,
        data: {
          name: name,
          phone: phone,
          address: address,
        },
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario actualizado",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDatas = async () => {
    const token = sessionStorage.getItem("token");
    try {
      let response = await axios.get("http://localhost:4000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDatas(response.data);
    } catch (error) {
      Navigate("/");
    }
  };

  useEffect(() => {
    getUserDatas();
  }, []);

  return (
    <Container margin="20px auto">
      <Container flexDirection="row">
        <Container width="30%" flexContent="flex-start">
          <Form height="32rem" onSubmit={handleSubmit}>
            <Container height="9rem">
              <Img src={logo} h="4rem" />
              <Text>Actualización de datos</Text>
              <TextSmall textAlign="center">Por favor ingresa los valores que deseas actualizar.</TextSmall>
            </Container>

            <FormControl>
              <Label>Nombre</Label>
              <Input type="text" onChange={(ev) => setName(ev.target.value)} />
            </FormControl>

            <FormControl>
              <Label>Teléfono</Label>
              <Input type="number" onChange={(ev) => setPhone(ev.target.value)} />
            </FormControl>

            <FormControl>
              <Label>Dirección</Label>
              <Input type="text" onChange={(ev) => setAddress(ev.target.value)} />
            </FormControl>

            <FormControl>
              <Button type="submit">Actualizar datos</Button>
            </FormControl>
          </Form>
        </Container>
        <Container width="65%" flexContent="flex-start">
          <Container height="4rem">
            <h2>Compras realizadas este mes</h2>
          </Container>
          <Table>
            <Thead>
              <Tr>
                <Th>Fecha</Th>
                <Th>Producto</Th>
                <Th>Precio</Th>
                <Th>Cantida</Th>
                <Th>SubTotal</Th>
                <Th>IVA</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>09/08/2022</Td>
                <Td>Camiseta</Td>
                <Td>$20.000</Td>
                <Td>2</Td>
                <Td>$40.000</Td>
                <Td>$8.000</Td>
                <Td>$48.000</Td>
              </Tr>
              <Tr>
                <Td>09/08/2022</Td>
                <Td>Camiseta</Td>
                <Td>$20.000</Td>
                <Td>2</Td>
                <Td>$40.000</Td>
                <Td>$8.000</Td>
                <Td>$48.000</Td>
              </Tr>
              <Tr>
                <Td>09/08/2022</Td>
                <Td>Camiseta</Td>
                <Td>$20.000</Td>
                <Td>2</Td>
                <Td>$40.000</Td>
                <Td>$8.000</Td>
                <Td>$48.000</Td>
              </Tr>
              <Tr>
                <Td>09/08/2022</Td>
                <Td>Camiseta</Td>
                <Td>$20.000</Td>
                <Td>2</Td>
                <Td>$40.000</Td>
                <Td>$8.000</Td>
                <Td>$48.000</Td>
              </Tr>
            </Tbody>
          </Table>
        </Container>
      </Container>
    </Container>
  );
};
