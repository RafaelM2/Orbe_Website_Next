import styled from "styled-components";

export const ProjectBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 400px;
  height: 350px;

  div:first-child {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div:nth-child(2) {
    padding: 0.5rem 1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    img {
      max-width: 50px;
    }
  }
`;
