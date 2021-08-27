import styled from "styled-components";

interface TextContainerProps {
  color: string;
  fontSizeTitle: string;
  fontSizeText: string;
  lineHeight: string;
}

export const TextContainer = styled.div<TextContainerProps>`
  min-width: 40%;
  max-width: 40%;
  color: ${(props) => (props.color ? props.color : "#fff")};

  h1 {
    padding-bottom: 1rem;
    font-size: ${(props) =>
      props.fontSizeTitle ? props.fontSizeTitle : "2rem"};
  }

  p {
    font-size: ${(props) => (props.fontSizeText ? props.fontSizeText : "1rem")};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
`;
