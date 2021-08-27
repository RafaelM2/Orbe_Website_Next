import { fontSizes, spacings } from "../../../styles/sets";
import { ClientsContainer } from "./styles";

export default function Clients() {
  return (
    <ClientsContainer
      padding={spacings.padding.main}
      fontSize={fontSizes.titleSec}
    >
      <h1>Nossos Clientes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <img src="clients.png" alt="" />
    </ClientsContainer>
  );
}
