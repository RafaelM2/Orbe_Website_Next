import styled from "styled-components";

interface PersonBlockContainerProps {
  side: string;
  active: boolean;
}

export const PersonBlockContainer = styled.div<PersonBlockContainerProps>`
  z-index: ${(props) => (props.active ? "20" : "5")};
  position: relative;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: ${(props) =>
      props.active ? (props.side == "left" ? "0" : " 0 -9.6rem") : "0"};

    img {
      margin: ${(props) =>
        props.active ? (props.side == "left" ? "0" : " 0 -9.6rem") : "0"};
    }
  }
`;
