import styled from "styled-components";

interface ContainerProps {
  padding: string;
  columnGap: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url("trabalhe_conosco_background.png");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.columnGap};
  div {
    width: 100%;
    display: flex;
    flex-direction: column;

    ul {
      border: 1px solid red;
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      font-size: 1.5rem;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          font-size: 2.5rem;
          color: #fff;
          display: flex;
          padding: 0.5rem;
          justify-content: center;
          align-items: center;
          border: 1px solid lightblue;
          border-radius: 40%;
        }

        .linkedin {
          background-color: #0077b5;
        }

        .facebook {
          background-color: #3b5998;
        }

        .instagram {
          background-image: linear-gradient(#f9c417, #e7594c, #c02d94, #6c37cc);
        }

        .whatsapp {
          background-color: #4caf50;
        }
      }
    }
  }
`;
