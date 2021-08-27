import styled from "styled-components";

interface ITextContainer {
  lineHeight: string;
  lineHeightSec: string;
  fontSizeTitle: string;
  fontSizeText: string;
}

export const TextContainer = styled.div<ITextContainer>`
  display: flex;
  flex-direction: column;
  text-align: left;

  div {
    padding-top: 1rem;

    h1 {
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : "2rem")};
      font-size: ${(props) =>
        props.fontSizeTitle ? props.fontSizeTitle : "2rem"};
    }

    span {
      font-size: ${(props) =>
        props.fontSizeText ? props.fontSizeText : "1rem"};
      line-height: ${(props) =>
        props.lineHeightSec ? props.lineHeightSec : "2rem"};
    }
  }
`;
