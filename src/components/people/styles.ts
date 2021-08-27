import styled from "styled-components";

interface PeopleContainerProps {
  padding: string;
}

export const PeopleContainer = styled.div<PeopleContainerProps>`
  background-image: url("equipe_background.png");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: -20rem;
  padding: ${(props) => props.padding};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: relative;
  padding-top: 2rem;
  width: 80%;
  min-height: 850px;
`;
