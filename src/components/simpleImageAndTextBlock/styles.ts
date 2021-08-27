import styled from "styled-components";

interface ITextContainer {
  fontSizeTitle: string;
  fontSizeText: string;
  lineHeight: string;
}

export const TextContainer = styled.div<ITextContainer>`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "2rem")};

  h1 {
    font-size: ${(props) =>
      props.fontSizeTitle ? props.fontSizeTitle : "2rem"};
  }

  span {
    font-size: ${(props) => (props.fontSizeText ? props.fontSizeText : "2rem")};
    padding-top: 1rem;
  }
`;
