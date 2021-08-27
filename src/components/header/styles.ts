import styled from "styled-components";

interface IHC {
  padding: string;
}

export const HeaderContainer = styled.div<IHC>`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : "1rem 1rem")};
  max-height: 4rem;
`;
