import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.backgroundColor.primary};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  aling-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: ${(props) => props.heightIpad};
  }
  @media (max-width: 425px) {
    width: 90%;
    height: ${(props) => props.heightPhone};
  }

  @media (max-width: 375px) {
    width: 100%;
    height: ${(props) => props.heightPhoneX};
  }
`;

const FormControl = styled.div`
  margin: 0px auto;
  padding: 0.2rem;
  width: 90%;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  aling-items: center;
`;

const Label = styled.label`
  padding: 0.5rem 0rem;
  color: ${(props) => props.theme.colors.tertiari};
`;

const Input = styled.input`
  margin: 0px auto;
  width: 90%;
  height: 7vh;
  padding: 0rem 1rem;
  background-color: ${(props) => props.theme.backgroundColor.light};
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: none;
  border-radius: 0.5rem;
  outline: none;
`;

export { Form, FormControl, Input, Label };
