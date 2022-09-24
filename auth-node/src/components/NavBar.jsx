import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Nav, Header, Logo, Menu, MenuLink, Hamburger } from "./Styles/Style-Nav";

export const NavBar = () => {
  const [datas, setDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const Navigate = useNavigate();

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

  const logout = () => {
    try {
      sessionStorage.removeItem("token");
      localStorage.removeItem("uid");
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDatas();
  }, []);

  return (
    <Header>
      <Nav>
        <Logo to="/">Marca</Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <ion-icon name="menu-outline" size="large"></ion-icon>
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuLink to="/Client">Home</MenuLink>
          <MenuLink to="/Client">Tienda</MenuLink>
          <MenuLink to="/Client">Mis Compras</MenuLink>
        </Menu>

        <Menu isOpen={isOpen}>
          <MenuLink to="/Profile">Hola, {datas.name}</MenuLink>
          <MenuLink to="/" onClick={logout}>
            Cerrar Sesión
          </MenuLink>
        </Menu>
      </Nav>
    </Header>
  );
};
