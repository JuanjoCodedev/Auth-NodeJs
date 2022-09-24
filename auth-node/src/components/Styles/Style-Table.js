import styled from "styled-components";

const Table = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${(props) => props.theme.backgroundColor.blue};
  text-align: left;
  border-collapse: collapse;
  overflow-y: scroll;
`;

const Thead = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.blue};
`;

const Tr = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Th = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.blue};
  width: 100%;
  padding: 2.2rem;
`;

const Tbody = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.tertiari};
`;

const Td = styled.div`
  width: 100%;
  padding: 2.2rem;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Table, Thead, Tr, Th, Tbody, Td };
