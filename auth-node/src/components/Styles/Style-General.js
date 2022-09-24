import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: ${(props) => props.margin || "none"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.theme.backgroundColor.blue};
  overflow: "hidden";

  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  justify-content: ${(props) => props.flexContent || "center"};
  align-items: ${(props) => props.flexAlign || "center"};
  gap: 6px;

  @media (max-width: 768px) {
    width: ${(props) => props.widthIpad};
    height: ${(props) => props.heightIpad};
    display: flex;
    flex-direction: ${(props) => props.flexDirectionIpad || "none"};
  }
  @media (max-width: 425px) {
    width: ${(props) => props.widthPhone};
    height: ${(props) => props.heightPhone};
  }

  @media (max-width: 375px) {
    width: ${(props) => props.widthPhoneX};
    height: ${(props) => props.heightPhoneX};
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.segondary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const TextSmall = styled.p`
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => props.theme.colors.segondary};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.light};
  text-align: ${(props) => props.textAlign || "center"};
`;

const Img = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

const Button = styled.button`
  width: 100%;
  height: 7vh;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: ${(props) => props.theme.backgroundColor.segondary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Circle = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.rd};
  border-color: ${(props) => props.bc};
  margin: ${(props) => props.mg};
`;

const Enlace = styled(Link)`
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.segondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.small}; ;
`;

export { Container, Text, TextSmall, Img, Button, Circle, Enlace };
