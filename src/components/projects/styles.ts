import styled from "styled-components";

interface ProjectsContainerProps {
  padding: string;
}

interface CarouselContainerProps {
  columnGap: string;
}

interface TextContainerProps {
  fontSize: string;
}

export const ProjectsContainer = styled.div<ProjectsContainerProps>`
  background-color: #f2f6fa;
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContainer = styled.div<TextContainerProps>`
  width: 45%;
  h1 {
    font-size: ${(props) => props.fontSize};
  }
`;

export const CarrouselContainer = styled.div<CarouselContainerProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 400px;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    display: flex;
    column-gap: ${(props) => props.columnGap};
  }

  span {
    position: absolute;
    bottom: 0;
  }

  svg {
    color: #333;
    font-size: 3rem;
  }
`;
