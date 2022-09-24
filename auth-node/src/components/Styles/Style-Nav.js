import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 10vh;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 2px 0px;
  } ;
`;

const Nav = styled.nav`
  padding: 0 2rem;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.segondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  } ;
`;

const MenuLink = styled(Link)`
  padding: 1rem 1rem;
  color: ${(props) => props.theme.colors.segondary};
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: ${(props) => props.theme.fontSizes.small};

  &:hover {
    color: #aaa;
  }
`;

const Hamburger = styled.button`
  background-color: ${(props) => props.theme.backgroundColor.primary};
  border: none;
  outline: none;
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  } ;
`;

export { Nav, Header, Logo, Menu, MenuLink, Hamburger };
