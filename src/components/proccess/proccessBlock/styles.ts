import styled from "styled-components";

interface ProccessBlockProps {
  lineHeight: string;
}

export const ProccessBlockContainer = styled.div<ProccessBlockProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 260px;

  span {
    padding-top: 1.5rem;
    line-height: ${(props) => props.lineHeight};
    font-weight: 300;
  }

  img {
    max-width: 100%;
    min-width: 100%;
    max-height: 140px;
    border-radius: 8px;
  }
`;
