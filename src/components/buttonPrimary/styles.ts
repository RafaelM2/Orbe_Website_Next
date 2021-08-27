import styled from "styled-components";

interface IBPC {
  backgroundColor: string;
  color: string;
  fontSize: string;
}

export const ButtonPrimaryContainer = styled.button<IBPC>`
  cursor: pointer;

  min-width: 340px;
  min-height: 50px;

  border-radius: 8px;
  border: none;
  outline: transparent;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};

  color: ${(props) => (props.color ? props.color : "#333")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
`;
