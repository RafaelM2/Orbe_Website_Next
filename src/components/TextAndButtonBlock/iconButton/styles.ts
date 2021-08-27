import styled from "styled-components";

interface ButtonContainerProps {
  backgroundColor: string;
  backgroundHover: string;
  color: string;
  fontSize: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;

  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};

  border: none;
  outline: transparent;
  border-radius: 8px;

  min-width: 240px;
  min-height: 165px;

  margin-bottom: 12px;
  margin-left: 16px;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  color: ${(props) => (props.color ? props.color : "#333")};

  img {
    position: absolute;
    top: 2rem;
  }

  span {
    position: absolute;
    top: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  &:hover {
    color: #fff;
    background-color: ${(props) =>
      props.backgroundHover ? props.backgroundHover : "#fff"};
  }
`;
