import styled from "styled-components";

interface ProccessContainerProps {
  padding: string;
  fontSize: string;
}

interface ProcessInnerProps {
  columnGap: string;
  color: string;
}

export const ProccessContainer = styled.div<ProccessContainerProps>`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  text-align: right;

  h1 {
    font-size: ${(props) => props.fontSize};
  }
`;

export const ProcessInnerContainer = styled.div<ProcessInnerProps>`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${(props) => (props.columnGap ? props.columnGap : "8rem")};

  svg {
    color: ${(props) => props.color};
    font-size: 10rem;
  }

  img {
    max-height: 230px;
    max-width: 240px;
  }
`;
