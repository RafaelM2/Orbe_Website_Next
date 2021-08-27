import styled from "styled-components";

interface ClientsContainerProps {
  padding: string;
  fontSize: string;
}

export const ClientsContainer = styled.div<ClientsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.padding};

  background-image: url("clientes_background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: ${(props) => props.fontSize};
    margin: 0;
    padding: 0;
  }

  img {
    padding-top: 3.5rem;
  }
`;
