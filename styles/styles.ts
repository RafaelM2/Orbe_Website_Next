import styled from "styled-components";

interface ContainerProps {
  columnGap: string;
  padding: string;
  background: boolean;
  backgroundColor?: string;
  smaller: boolean;
  smallerPadding?: string;
}

export const TwoColumnsContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  column-gap: ${(props) => (props.columnGap ? props.columnGap : "8rem")};

  padding: ${(props) => (props.smaller ? props.smallerPadding : props.padding)};

  background-color: ${(props) =>
    props.background ? props.backgroundColor : "#fff"};

  img {
    max-width: 590px;
    max-height: 400px;
  }
`;

interface IC {
  color: string;
}

export const IntroductionContainer = styled.div<IC>`
  display: flex;
  flex-direction: column;

  width: 100vw;

  color: ${(props) => (props.color ? props.color : "#fff")};

  background-image: url("inicio_home.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  padding-bottom: 4.5rem;
`;

interface IIC {
  padding: string;
}

export const IntroductionInnerContainer = styled.div<IIC>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 8.5rem;

  padding: ${(props) => (props.padding ? props.padding : "1rem")};

  img {
    max-width: 590px;
    max-height: 400px;
  }
`;

interface ITC {
  fontSizeTitle: string;
  fontSizeText: string;
}

export const IntroductionTextContainer = styled.div<ITC>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-size: ${(props) =>
      props.fontSizeTitle ? props.fontSizeTitle : "1rem"};
    line-height: 150%;
    padding: 0;
    margin: 0;
  }

  h3 {
    font-size: ${(props) =>
      props.fontSizeText ? props.fontSizeText : ".7rem"};
    line-height: 2rem;
    font-weight: 300;
  }
`;
