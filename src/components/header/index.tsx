import { spacings } from "../../../styles/sets";
import Menu from "./menu";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer padding={spacings.padding.header}>
      <img src="logo.png" />
      <Menu />
    </HeaderContainer>
  );
}
